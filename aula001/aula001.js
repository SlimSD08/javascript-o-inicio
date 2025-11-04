// Boas práticas

/*
// Não declare variáveis com var
// Use constantes sempre que possível
// SEMPRE use “===”
// Dê um valor às suas variáveis
// Leve o ponto e vírgula a sério
*/


// Case sensitive

/*
// "Case sensitive" significa que um sistema diferencia letras maiúsculas de minúsculas, tratando-as como caracteres diferentes (por exemplo, "Olá" é distinto de "olá").
*/
console.log("Olá Mundo")

// Sintaxe básica e comentário

/*
// A sintaxe básica do JavaScript envolve variáveis (declaradas com var, let ou const), tipos de dados como números e strings, operadores (+, -, =), estruturas de controle (como if/else) e funções. Comentários são ignorados pelo navegador e podem ser de linha única, começando com //, ou de múltiplas linhas, iniciando com /* e terminando com */

// Declaração de variáveis(var, let, const)
let nome = "Guto"
console.log("Olá " + nome)
nome = "Xavier"
console.log(nome)

const idade = 39
console.log(idade)

console.warn("Atenção")
console.info("Informações")
console.error("erro")

// var, let e const são palavras-chave para declarar variáveis em JavaScript. var tem escopo de função ou global e pode ser redeclarada e reatribuída. let tem escopo de bloco, pode ser reatribuída, mas não redeclarada. const tem escopo de bloco, não pode ser nem redeclarada nem reatribuída e deve ser inicializada ao ser declarada.

// Escopo: Global ou de função.
// Reatribuição: Permite reatribuir o valor.
// Redeclaração: Permite redeclarar a variável dentro do mesmo escopo.
// Quando usar: Evite-o em código novo, use-o apenas se precisar manter compatibilidade com código legado. 
// let
// Escopo: De bloco ({}).
// Reatribuição: Permite reatribuir o valor.
// Redeclaração: Não permite redeclarar a variável no mesmo escopo.
// Quando usar: Quando você precisa de uma variável cujo valor pode mudar ao longo do tempo

// Console e Debug

// O console de debug do JavaScript é uma ferramenta essencial integrada aos navegadores (como Chrome, Firefox e Edge) que permite inspecionar e corrigir erros no código. Ele oferece uma variedade de métodos no objeto console para exibir mensagens, monitorar variáveis e medir o desempenho.

//Tipos de dados

// Tipos Primitivos
// String: Sequência de caracteres usada para representar texto, definida com aspas simples, duplas ou crases. 
// Number: Representa valores numéricos, podendo ser inteiros ou de ponto flutuante. Inclui também valores especiais como NaN (Not a Number) e infinito. 
// BigInt: Para números inteiros maiores do que os que o tipo Number pode representar. 
// Boolean: Possui apenas dois valores: true (verdadeiro) e false (falso). 
// Undefined: Indica que uma variável não recebeu um valor. 
// Null: Representa a ausência intencional de um valor. 
// Symbol: Um valor único e imutável que pode ser usado como identificador de propriedade de um objeto.

//string
let cidade = "Americana"

//number
let salario = 2000

//bool
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição

// Símbolo: =
// Função: Atribui um valor à variável à esquerda. Exemplo: x = 10

//     Operadores aritméticos

// Símbolos: + (adição), - (subtração), * (multiplicação), / (divisão), % (resto da divisão ou módulo).
// Função: Realizam operações matemáticas básicas com números. 

//     Operadores relacionais

// Símbolos: == (igual a), != (diferente de), < (menor que), > (maior que), <= (menor ou igual a), >= (maior ou igual a).
// Função: Comparam dois operandos e retornam um valor booleano (verdadeiro ou falso). 

//     Operadores lógicos

// Símbolos: && (E lógico), || (OU lógico), ! (NÃO lógico).
// Função: Combinam expressões booleanas. O && é verdadeiro apenas se ambas as condições forem verdadeiras. O || é verdadeiro se pelo menos uma das condições for verdadeira. O ! inverte o valor booleano de uma expressão. 

// Estrutura
//     Estrutura de controle/decisão

// As estruturas de controle de decisão em JavaScript são blocos de código que permitem que o programa tome decisões e execute comandos de forma condicional, guiando o fluxo da execução

//     Laços de repetição

// Arrays --> vetor

// Funções personalizadas
 