/* Faça um laço de repetição que contenha uma operação aritmética
qualquer , esse laço vai se repetir 10 vezes, utilizando a entrada de dados
(prompt-sync), os resultados de cada operação será armazenada
em um vetor, após o término do laço de repetição os resultados
de cada operação armazenada deve ser exibido (com laço de repetição ou não).*/
/*let teclado = require('prompt-sync')();

let  resultados = new Array(10); // Vetor para armazenar os resultados

let i = 0;

// Laço WHILE para entrega de dados e cálculo
while (i < 10) {
    let numero1 =  parseFloat(teclado(`Digite o primeiro número: `));
    let numero2 = parseFloat(teclado(`Digite o segundo número: `));
    
    resultados[i] = numero1 * numero2; //Operação aritmética (multiplicação)
    
    i++;
}*/
var teclado = require('prompt-sync')();
var resultados = new Array(10);
var i = 0;
for (var i_1 = 0; i_1 < 10; i_1++) {
    var numero1 = parseFloat(teclado("Digite o primeiro n\u00FAmero: "));
    var numero2 = parseFloat(teclado("Digite o segundo n\u00FAmero: "));
    resultados[i_1] = numero1 * numero2;
    i_1++;
}
;
console.log("Resultados das multiplicações:");
for (var j = 0; j < resultados.length; j++) {
    console.log("Resultado ".concat(j + 1, ": ").concat(resultados[j]));
}
