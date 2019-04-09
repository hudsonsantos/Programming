
/* 

Programação Orientada a Objetos

*/


// Herança

// Definindo Classe Pai
var pai = { 
  valor:100, 
  getValor: function funcao(){ 
    return this.valor; 
  }
}; 

// Definindo Classe Filha
var filho = Object.create(pai); 
filho.valor = 200; 

// Definindo Classe Neta
var neto = Object.create(filho); 

// Verificando a Herança
console.log('*** Hierarquia de Classes ***');
console.log('Valor da Classe Pai: '   + pai.getValor()); 
console.log('Valor da Classe Filha: ' + filho.getValor()); 
console.log('Valor da Classe Neta: '  + neto.getValor());


// Polimorfismo

// Definindo Classe Pai
var pai = { 
  valor:100,
  getValor: function funcao(){ 
    return this.valor; 
  }, 
}; 

// Definindo Classe Filha
var filho = Object.create(pai); 

// Redefine o método getValor na Classe Filha
filho.getValor = function outraFuncao(){ 
  return this.valor + 50; 
}; 

// Atribuindo valor a propriedade na Classe Filha
filho.valor = 200; 

console.log('*** Polimorfismo ***');
console.log('Valor da Classe Pai: '  + pai.getValor());
console.log('Valor da Classe Filha: ' + filho.getValor());