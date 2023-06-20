# Get started JavaScript

![GitHub repo size](https://img.shields.io/github/repo-size/alexandrekatsuura/get-started-js?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/alexandrekatsuura/get-started-js?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/alexandrekatsuura/get-started-js?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/alexandrekatsuura/get-started-js?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/alexandrekatsuura/get-started-js?style=for-the-badge)

[get-started-html]: https://github.com/alexandrekatsuura/get-started-html
[get-started-css]: https://github.com/alexandrekatsuura/get-started-css


## Descrição
> JavaScript é uma das linguagens de programação mais populares e amplamente utilizadas na web. Ela permite adicionar interatividade e dinamismo aos sites, além de ser usada no desenvolvimento de aplicativos web e móveis.

## Pré-requisitos
Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Possuir um ambiente de desenvolvimento (recomendação Visual Studio Code).
* Conceitos básicos de programação.

## Bom saber
* Conhecimento básico em HTML (Conheça em [get-started-html][get-started-html])
* Conhecimento básico em CSS (Conheça em [get-started-css][get-started-css])

## Conceitos importantes
### Fundamentos da programação
> Compreensão básica dos conceitos de programação. Familiarize-se com noções como variáveis, tipos de dados, estruturas de controle (como loops e condicionais) e funções.

### Ambiente de desenvolvimento
> Ambiente de desenvolvimento para JavaScript. Você pode usar editores de texto simples como o Visual Studio Code ou o Sublime Text. Além disso, é útil ter um navegador moderno, como o Google Chrome, que possui um console de desenvolvedor para depurar seu código.

### Sintaxe
> Sintaxe básica do JavaScript, declaração de variáveis, atribuição de valores, operadores aritméticos e de comparação, estruturas de controle e funções.

### Manipulação do DOM
> O Document Object Model (DOM) é uma representação em árvore de uma página web e permite que você manipule elementos HTML usando JavaScript. Acessar, modificar e criar elementos HTML usando o JavaScript.

### Eventos
> Os eventos são ações do usuário, como cliques, movimentos do mouse ou envio de formulários.

### Assincronismo
> O JavaScript possui recursos assíncronos, como chamadas de API e manipulação de eventos assíncronos.

## Exemplo fundamentos da programação
* Declaração de variáveis e atribuição de valores
```
let nome = "João";
const idade = 25;
var altura = 1.75;
```

* Estruturas de controle (condicionais)
```
let temperatura = 30;

if (temperatura > 25) {
  console.log("Está quente lá fora!");
} else if (temperatura > 15) {
  console.log("Está agradável!");
} else {
  console.log("Está frio!");
}
```

* Estruturas de controle (loops)
```
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let contador = 0;
while (contador < 3) {
  console.log("Contador: " + contador);
  contador++;
}
```

* Funções
```
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}

saudacao("Maria");

function soma(a, b) {
  return a + b;
}

let resultado = soma(2, 3);
console.log(resultado);
```

* Arrays
```
let frutas = ["maçã", "banana", "laranja"];

console.log(frutas[0]);
console.log(frutas.length);

frutas.push("abacaxi");
console.log(frutas);

for (let fruta of frutas) {
  console.log(fruta);
}
```