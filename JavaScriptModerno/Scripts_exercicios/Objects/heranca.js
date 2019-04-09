
/* 

Programação Orientada a Objetos

*/


// Herança

// Define a classe Pessoa
function Pessoa() {}

/* 

Podemos usar duas formas de criar métodos para nossa classe. 
Utilizando prototype que é um recurso do Javascript que possibilita modificar uma classe depois de que ela foi criada 
e outra forma é criar uma função dentro da classe. 
   
Para criar herança no JavaScript vamos utilizar prototype, vamos transferir propriedades e métodos de um objeto para outro.
   
*/

Pessoa.prototype.caminhar = function(){
  alert ('Sou Uma Pessoa e Estou Caminhando!');
};

Pessoa.prototype.dizOi = function(){
  alert ('Sou Uma Pessoa e Digo Oi!');
};

// Define a classe  Estudante
function Estudante() {
  // Chama o método pai
  Pessoa.call();
}

// Herda de Pessoa
Estudante.prototype = new Pessoa();

// Corrige o ponteiro construtor, que aponta para Pessoa
Estudante.prototype.constructor = Estudante;
 
// Adiciona o método dizOi
Estudante.prototype.dizOi = function(){
  alert('Sou Estudante e Digo Oi!');
}

// Adiciona o método dizTchau 
Estudante.prototype.dizTchau = function(){
  alert('Sou Estudante e Digo Tchau!');
}

// Objeto
var estudante1 = new Estudante();
estudante1.dizOi();
estudante1.caminhar();
estudante1.dizTchau();

// Checa a herança
alert(estudante1 instanceof Pessoa); 
alert(estudante1 instanceof Estudante); 