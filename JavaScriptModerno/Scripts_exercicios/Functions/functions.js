
/* 

Funções

*/

// Exemplo 1
function square(x){
    return x * x;
}

console.log("Exemplo 1");
console.log(square(3));

// Exemplo 2
function calculaComissao(salario) {
    return salario * 0.15;
}

var Func1Comissao = calculaComissao(4000);
var Func2Comissao = calculaComissao(3500);
var Func3Comissao = calculaComissao(1000);

console.log("Exemplo 2");
console.log(Func1Comissao, Func2Comissao, Func3Comissao);

// Exemplo 3
function calculaComissaoTurno(salario, turno) {
    var comissao = calculaComissao(salario);
    
    if (turno == "Noite") {
        console.log('Turno ' + turno + ' recebe adicional de 100 reais. Comissao = ' + (comissao + 100));
    } else {
        console.log('Turno ' + turno + ' recebe valor normal. Comissao = ' + comissao);
    }
    
}

console.log("Exemplo 3");
calculaComissaoTurno(10000, 'Noite');
calculaComissaoTurno(6500, 'Dia');
calculaComissaoTurno(8000, 'Noite');

// Exemplo 4
function power(base, exponent) {
    
    if (exponent == undefined)
        exponent = 2;
    
    var result = 1;
    
    for (var count = 0; count < exponent; count++)
        result *= base;
    
    return result;
}
  
console.log("Exemplo 4");
console.log(power(5));
console.log(power(5, 3));
console.log(power(5, 3, 9));
console.log(power());

// Exemplo 5
function power2(base, exponent) {
    if (exponent == 0)
      return 1;
    else
      return base * power2(base, exponent - 1);
  }
  
console.log("Exemplo 5");
console.log(power2(2, 3));
