pragma solidity ^0.5.0;

contract LtD {
    
    address donoContrato;
    string  nomeDoDono;
    uint    dataInicio;
    
    struct Sorteios {
        uint    numeroSorteado;
        uint    dataSorteio;
        address remetente;
        uint    countPalpites;
    }
    
    Sorteios[] sorteio;
    
    mapping (address => uint) palpites; // faz mapeamento do numeroEntrada de cada usuário com o próprio usuário
    address[] votador;
    address[] ganhador;
    
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
        votador.push(msg.sender);
        emit PalpiteRegistrado(msg.sender, votoEnviado);
        }

     
    
    
}
