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

let teclado = require('prompt-sync')();

let  resultados = new Array(10); 

let i = 0;


for (let i = 0; i < 10; i++) {
    let numero1 =  parseFloat(teclado(`Digite o primeiro número: `));
    let numero2 = parseFloat(teclado(`Digite o segundo número: `)); 
    
    resultados[i] = numero1 * numero2; 
    
    i++;
};

console.log("Resultados das multiplicações:");

for (let j = 0; j < resultados.length; j++) {
    console.log(`Resultado ${j + 1}: ${resultados[j]}`);
}