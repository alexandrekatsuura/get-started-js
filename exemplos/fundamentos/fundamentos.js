// Declaração de variáveis e atribuição de valores
let nome = "João";
const idade = 25;
var altura = 1.75;

// Estruturas de controle (condicionais)
let temperatura = 30;

if (temperatura > 25) {
  console.log("Está quente lá fora!");
} else if (temperatura > 15) {
  console.log("Está agradável!");
} else {
  console.log("Está frio!");
}

// Estruturas de controle (loops)
for (let i = 0; i < 5; i++) {
    console.log(i);
}
  
let contador = 0;
while (contador < 3) {
    console.log("Contador: " + contador);
    contador++;
}

// Funções
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("Maria");

function soma(a, b) {
    return a + b;
}

let resultado = soma(2, 3);
console.log(resultado);

//Arrays
let frutas = ["maçã", "banana", "laranja"];

console.log(frutas[0]);
console.log(frutas.length);

frutas.push("abacaxi");
console.log(frutas);

for (let fruta of frutas) {
  console.log(fruta);
}