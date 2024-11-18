// Exercícios
// Exercício 1
// Crie uma função que exiba uma mensagem de boas-vindas ao usuário quando a página for carregada. Utilize essa função para personalizar a experiência de cada usuário.

function exibirBoasVindas() {
    alert("Bem-vindo(a) ao nosso site!");
}
window.onload = exibirBoasVindas;

// Exercício 2
// Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar. Retorne true se for par e false se for ímpar.

function ehPar(numero) {
    return numero % 2 === 0;
}
// Teste
console.log(ehPar(4)); // true
console.log(ehPar(7)); // false

// Exercício 3
// Implemente uma função que calcule a média aritmética recebidos usando a função prompt e retorne o resultado. Utilize essa função para calcular a média de diferentes conjuntos de números.

function calcularMedia() {
    let numeros = prompt("Digite os números separados por vírgula:");
    let arrayNumeros = numeros.split(",").map(Number);
    let soma = arrayNumeros.reduce((acc, num) => acc + num, 0);
    return soma / arrayNumeros.length;
}
// Teste
console.log(calcularMedia());

// Exercício 4
// Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta. Utilize essa função para converter diferentes strings.

function converterCaixaAlta(texto) {
    return texto.toUpperCase();
}
// Teste
console.log(converterCaixaAlta("javascript é incrível!")); // "JAVASCRIPT É INCRÍVEL!"

// Exercício 5
// Implemente uma função que inverta a ordem dos elementos em um array. Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.

function inverterArray(array) {
    return array.reverse();
}
// Teste
console.log(inverterArray([1, 2, 3, 4])); // [4, 3, 2, 1]

// Exercício 6
// Crie uma função que receba um valor e uma porcentagem como parâmetros. A função deve retornar o valor acrescido da porcentagem indicada.

function calcularComPorcentagem(valor, porcentagem) {
    return valor + (valor * (porcentagem / 100));
}
// Teste
console.log(calcularComPorcentagem(100, 20)); // 120

// Exercício 7
// Desenvolva uma função que verifique se uma palavra é um palíndromo (lê-se da mesma forma da esquerda para a direita e vice-versa). Retorne true se for um palíndromo e false se não for.

function ehPalindromo(palavra) {
    let palavraInvertida = palavra.split("").reverse().join("");
    return palavra.toLowerCase() === palavraInvertida.toLowerCase();
}
// Teste
console.log(ehPalindromo("radar")); // true
console.log(ehPalindromo("javascript")); // false

// Exercício 8
// Crie uma função que calcule o fatorial de um número. Utilize essa função para calcular o fatorial de diferentes números.

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    return numero * calcularFatorial(numero - 1);
}
// Teste
console.log(calcularFatorial(5)); // 120
