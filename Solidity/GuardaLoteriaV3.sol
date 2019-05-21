pragma solidity ^0.5.0;

contract GaurdaLoteria {
    address payable dono;
    uint numeroSorteado = 0;
    uint contadorDeSorteios = 0;

    uint[] numerosSorteados;
    
    constructor(uint numeroInicial) public payable comCustoMinimo(1000) {
       // require (msg.sender.balance > 99.99999999999 ether);
        
        dono = msg.sender;
        set(numeroInicial);
    }
    
    event TrocoEnviado(address pagador, uint troco);
    
    //função que guarda numero envaido, e realiza um incremento de numero na lista numerosSorteados
    function set(uint enviado) public payable comCustoMinimo(1000) {
        numeroSorteado = enviado;
        contadorDeSorteios++;
        numerosSorteados.push(enviado);
        
        //envia troco
        if (msg.value > 1000) {
            uint troco = msg.value - 1000;
            msg.sender.transfer(troco);
            emit TrocoEnviado(msg.sender, troco);
            
        }
    }
    
    modifier comCustoMinimo(uint min) {
        require(msg.value >= min, "Não foi enviado ether suficiente");
        _;
    }
    
    function get() public view returns (  address _donoDoContrato
                                        , uint _ultimoNumeroSorteado
                                        , uint _contadorDeSorteios
                                        , uint _saldoEmWei
                                        , uint[] memory _todosNumerosSorteados
                                        )  {
        
        uint ultimo = numerosSorteados[contadorDeSorteios-1];
        return (  dono
                , ultimo
                , contadorDeSorteios
                , address(this).balance //saldo atual
                , numerosSorteados
            );
    }
    
    function kill () public {
        require (msg.sender ==  dono);
        selfdestruct(dono);
        
    }
}
