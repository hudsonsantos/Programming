
/* 

Estruturas de Dados - Arrays

*/

// Exemplo 1

var frutas = ['Morango', 'Melancia', 'Abacate'];

console.log("Exemplo 1");
console.log(frutas);
console.log(typeof(frutas));
console.log(frutas.length)
console.log(frutas.indexOf('Abacate'));

console.log(frutas[1]);

frutas[2] = 'Pera';
frutas[3] = 'Abacate';

console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas);

// Exemplo 2

var valores = new Array(100, 'Rio de Janeiro', ['Morango', 'Melancia']);

console.log(valores);

