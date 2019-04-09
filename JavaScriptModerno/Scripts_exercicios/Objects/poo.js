
/* 

Programação Orientada a Objetos

*/

// Classes em JavaScript Usando Funções

// Definição da Classe
function Pessoa(nome){
    this.Nome = nome;
}

// Objetos: Instâncias da Classe
var pessoa1 = new Pessoa('Maria');
var pessoa2 = new Pessoa('Bob');

// Propriedades dos Objetos
console.log('Nome Pessoa1: ' + pessoa1.Nome); 
console.log('Nome Pessoa2: ' + pessoa2.Nome); 


// Classes em JavaScript Usando Objetos Literais

// Esta já é a definição do objeto. 
// Não precisamos definir uma Classe antes.
var carro = {
    marca: undefined,
    modelo: undefined,
    getDetalhes: function () {
    return this.marca + ' - ' + this.modelo;
        }
    }

carro.modelo = "Uno";
carro.marca = "Fiat";
alert("Marca e Modelo do Objeto Carro: " + carro.getDetalhes());   

console.log(typeof(carro));
    