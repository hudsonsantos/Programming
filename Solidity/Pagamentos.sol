pragma solidity ^0.5.0;

contract LtD {
    
    address payable donoContrato;
    string  nomeDoDono;
    uint    dataInicio;
    
    struct Sorteio {
        uint    dataSorteio;
        uint    numeroSorteado;
        address remetente;
        uint    countPalpites;
    }
    
    Sorteio[] sorteios;
    
    mapping (address => uint) palpites; // faz mapeamento do numeroEntrada de cada usuário com o próprio usuário
    
    address[] palpiteiro;
    address payable[] ganhadores;
    
    constructor( string memory _nome)  public {  // constructor pegara os dados de inicio e emitirá nas variáveis delcaradas 
        donoContrato = msg.sender;
        nomeDoDono   = _nome;
        dataInicio   = now;
    }
    
    // Modifier serão chamados mais a baixo
    modifier apenasDono() {
        require(msg.sender == donoContrato, 'Apenas o dono do contrato pode fazer isso!');
        _;
    }
    
    modifier excetoDono() {
        require(msg.sender != donoContrato, 'O dono do contarto não pode fazer isso!');
        _;
    }
    
    event TrocoEnviado(address pagante, uint troco);
    event PalpiteRegistrado(address remetente, uint palpites);
    
    
    function enviaVoto(uint votoEnviado) payable public {
        
        require(votoEnviado > 1 && votoEnviado <= 4, 'Numero tem que ser de 1 a 4');
        require(palpites[msg.sender] == 0, 'Apenas um voto por sorteio'); // Se alguem no mapeamento já votou, não pode votar mais
        
        require(msg.value >= 1000 wei, 'A taxa para votar é de 1000 wei');
        
        //calcula envia troco
        uint troco = msg.value - 1000 wei;
       
        if (troco > 0) {
            msg.sender.transfer(troco);
            emit TrocoEnviado(msg.sender, troco);  // evento TrocoEnviado 
        }
        
        // registra votos
        palpites[msg.sender] = votoEnviado;
        palpiteiro.push(msg.sender);
        
        emit PalpiteRegistrado(msg.sender, votoEnviado);
    }

     
     event SorteioPostado(uint resultado);
     event PremiosEnviados(uint premioTotal, uint premioIndividual);
     
    
    function sortear() public apenasDono() returns (uint256 _numeroSorteado){
         
        require(now > dataInicio + 1 minutes, "O sorteio só pode ser veiot depois de um intervalo de 1 minuto");
        require(palpiteiro.length >= 1 , "Um minimo de 1 pessoa é exigida para poder sortear");
         
        // sortear um número
        uint256 numeroSorteado = uint256(keccak256(abi.encodePacked(blockhash(block.number-1))))/64+1;
         
        sorteios.push(Sorteio({
             dataSorteio: now,
             numeroSorteado: numeroSorteado,
             remetente: msg.sender,
             countPalpites: palpiteiro.length
        }));
    
        emit SorteioPostado(numeroSorteado);
     
        // procura os ganhadores
        for(uint p = 0; p < palpiteiro.length; p++) {
            address palpiteiro = palpiteiro[p];
         
            if (palpites[palpiteiro] == numeroSorteado) {
                ganhadores.push(palpiteiro);
            }
            delete palpites[palpiteiro];
        }
     
        uint premioTotal = address(this).balance;
    
        if (ganhadores.length > 0) {
            uint premio = premioTotal / ganhadores.length;
   
            // envia os PremiosEnviados
            for (uint p = 0; p < ganhadores.length; p++) {
                ganhadores[p].transfer(premio);
            }
            emit PremiosEnviados(premioTotal, premio);
        } 
    
        delete palpiteiro;
        delete ganhadores;
    
        return numeroSorteado;
    }
    
    function kill() public apenasDono(){
        donoContrato.transfer(address(this).balance);
        selfdestruct(donoContrato); 
    }
}
