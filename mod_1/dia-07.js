// loops for, while e do while 02-12-2025

// q1 FOR

const entrada = require("readline-sync");

let valor1 = entrada.questionInt("Informe o primeiro valor do intervalo: ")
let valor2 = entrada.questionInt("Informe o segundo valor do intervalo: ")

if (valor1 < valor2){

    for (let c = valor1; c <= valor2; c++){
        if (c % 3 === 0 && c % 5 === 0){
            console.log(`${c} é múltiplo de 3 e 5`)
        }
    }
}
else{
    console.log("Intervalor invalido! ")
}

// ------------------
// q2 FOR

// const entrada = require("readline-sync");

// qnt_p = 0
// qnt_i = 0

// for (c = 1; c <= 10; c++ ){
//     let valor = entrada.questionInt(` Informe o ${c} valor: `)
//     if (valor % 2=== 0){
//         qnt_p++
//         console.log(`qnt_p ${qnt_p} `)
//     }else{
//         qnt_i++
//         console.log(`qnt_i ${qnt_i}`)

//     }
// }

// console.log(` Total de numeros pares: ${qnt_p}`)
// console.log(` Total de numeros impares: ${qnt_i}`)



// ------------------
// q1 WHILE

// const entrada = require("readline-sync");
// let cond = false
// menorq_21 = 0, maiorq_51 = 0
// while (cond == false){
//     let idade = entrada.questionInt("Informe uma idade ou um valor negativo para sair: ")
//     if (idade > 0){

//         if (idade < 21){
//             menorq_21++
//         }
//         else if(idade > 50){
//             maiorq_51++
//         }

//     }else{
//         cond = true
//     }
// }
// console.log(`Total de pessoas menores de 21 anos: ${menorq_21}`)
// console.log(`Total de pessoas maiores de 50 anos: ${maiorq_51}`)

// ------------------
// q2 WHILE

// ------------------
// q1 DO WHILE

// const entrada = require("readline-sync");
// valor = 0, s_valores = 0
// do {
//     valor = entrada.questionInt("Digite um valor ou 0 para sair: ")
//     if(valor > 0){
//         s_valores = s_valores + valor
//     }
// } while(valor != 0);

// console.log(`A soma dos números positivos é: ${s_valores}`)

// ------------------
// q2 DO WHILE

// const entrada = require("readline-sync");
// let valor = 0; let qnt_div3 = 0; let s_div3 = 0
// do{
//     valor = entrada.questionInt("Informe um valor ou digite 0 para sair:")
//     if (valor % 3 == 0 && valor != 0){
//         qnt_div3++
//         console.log(`qnt_div3 ${qnt_div3}`)

//         s_div3=s_div3+valor
//         console.log(`s_div3 ${s_div3}`)
//     }
// }while(valor != 0)
//     media = s_div3 / qnt_div3

// console.log(`A média de todos os números múltiplos de 3 é ${media}`)

// ------------------
// q1 VETOR

// const entrada = require("readline-sync");

// let lista = [2,5,1,3,4,9,7,8,10,6]
// let encontrado = false;

// let pesquisa = entrada.questionInt("Digite o numero que voce deseja encontrar: ")

// for (let i = 0; i < lista.length; i++){
//     if (pesquisa == lista[i]){
//         console.log(`O numero ${pesquisa} esta localizado na posicao: ${i}`)
//         encontrado = true;
//         break;
//     }
// }

// if (!encontrado) {
//     console.log("Não foi encontrado!");
// }

// ------------------
// q2 VETOR

// const entrada = require("readline-sync");
// let vetor = [];

// for (let i = 0; i < 10; i++) {
//     let numero = entrada.questionInt(`Digite o ${i + 1} numero: `);
//     vetor.push(numero);
// }

// console.log("\nElementos nos indices impares:");
// for (let i = 1; i < vetor.length; i += 2) { 
//     console.log(`${vetor[i]}`);
// }

// console.log("\nElementos pares:");
// for (let i = 0; i < vetor.length; i++) {
//     if (vetor[i] % 2 === 0) {
//         console.log(` ${vetor[i]}`);
//     }
// }

// let soma = 0;
// for (let i = 0; i < vetor.length; i++) {
//     soma += vetor[i];
// }
// console.log(`\nSoma: ${soma}`);

// let media = soma / vetor.length;
// console.log(`Media: ${media.toFixed(2)}`); 

// ------------------
// q1 MATRIZ

const entrada = require("readline-sync");

let matriz = [];

for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = entrada.questionInt(`Digite o valor da posicao [${i + 1}, ${j + 1}]: `);
    }
}

let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;

console.log("\nElementos da Diagonal Principal:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i][i]);  
    somaDiagonalPrincipal += matriz[i][i];
}

console.log("\nElementos da Diagonal Secundária:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i][2 - i]);
    somaDiagonalSecundaria += matriz[i][2 - i]; 
}

console.log(`\nSoma da Diagonal Principal: ${somaDiagonalPrincipal}`);
console.log(`Soma da Diagonal Secundária: ${somaDiagonalSecundaria}`);

