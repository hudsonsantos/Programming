
/* 

Programação Orientada a Objetos

*/


// Construtor

// Exemplo 1

// Classe
var Pessoa = function () {
    console.log("Exemplo 1: Objeto Criado");
  }
  
// Objetos
var pessoa1 = new Pessoa();
var pessoa2 = new Pessoa();


// Exemplo 2

// Classe
var Pessoa = function(nome) {
    this.Nome = nome;
    console.log('Exemplo 2: Exemplar da Classe Pessoa Criado');
  };
  
  // Objetos
  var pessoa1 = new Pessoa('Maria');
  var pessoa2 = new Pessoa('Bob');
  
  // Atributos
  console.log('Exemplo 2: Nome pessoa1 ' + pessoa1.Nome); 
  console.log('Exemplo 2: Nome pessoa2 ' + pessoa2.Nome); 


// Exemplo 3

// Classe
var Pessoa = function (genero) {
    this.genero = genero;
    console.log('Exemplo 3: Pessoa instanciada');
  }
  
  // Métodos
  Pessoa.prototype.dizerOla = function(){
    console.log('Exemplo 3 (Metodo): Hello');
  };
  
  Pessoa.prototype.dizGenero = function(){
    console.log('Exemplo 3 (Metodo): ' + this.genero);
  };
  
  // Objetos
  var pessoa1 = new Pessoa('Masculino');
  var pessoa2 = new Pessoa('Feminino');
  
  // Chamando o método dizerOla.
  pessoa1.dizerOla(); 
  
  // Chamando o método dizGenero.
  pessoa1.dizGenero(); 
  