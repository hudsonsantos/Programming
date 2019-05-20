pragma solidity ^0.5.0;

contract GuardaLoteria {
    
    uint    numeroSorteado;
    address dono;
    uint    contadorDeSorteios = 0;
    bool    donoRico = false;
    
    constructor(uint numeroInicial) public payable {
        //require(msg.sender.balance > 99.999999999 ether);
        
        numeroSorteado = numeroInicial;
        dono = msg.sender;
        contadorDeSorteios = 1;
        
        if (msg.sender.balance > 20 ether ){
            donoRico = true;
            
        }

    }
 
 // envia troco caso passe o limite de ether estipulado, e custo minimo para realizar a chamada do contrato
 
    event TrocoEnviado(address pagador, uint troco);
    
    function set(uint enviado) public payable custoMinimo(1000) {
        numeroSorteado = enviado;
        contadorDeSorteios++;
        
        if(msg.value > 1000) {
            uint troco = msg.value - 1000;
            msg.sender.transfer(troco);
            emit TrocoEnviado(msg.sender, troco);
        }
    }

    modifier custoMinimo(uint min){
        require(msg.value >= min, "não foi enviado Ehter suficiente.");
        _;
    }
    
    function get() public view returns (uint){
        return numeroSorteado;
    }
   
}
