// 1
function exemplo() {
  if (true) {
    let mensagem = "Olá, mundo!";
  }
  console.log(mensagem);
}
exemplo();

// 5
let resultado = 0;

for (let i = 0; i < 5; i++);
{
  resultado += i;
}

console.log(resultado);

// 6
const valor = "0";

if (valor) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// 8
// let x = 3;
// let y = x++;

// console.log(y);

// 10
let soma = 0;

for (let i = 1; i <= 3; i++) {
  soma += i;
}

console.log(soma);

// 13
teste();

var teste = function() {
  console.log("Função atribuída a variável");
};

// 15
function somaDecrescente(n) {
  if (n === 0) return 0;
  return n + somaDecrescente(n--);
}

console.log(somaDecrescente(5));

// 16
let a = NaN;

if (a === NaN) {
  console.log("É NaN");
} else {
  console.log("Não é NaN");
}

// 19
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}

// 20 
var x = 5;
let x = 10;

console.log(x);
