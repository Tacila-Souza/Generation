// typescript 03-12-2025
// q1 

import * as readlineSync from 'readline-sync';

let cores: string[] = [];

for (let i = 0; i < 5; i++) {
    let cor: string = readlineSync.question(`Digite a ${i + 1} cor: `);
    cores.push(cor);  
}

console.log("\n Listar todas as cores:");
cores.forEach((cor, index) => {
    console.log(`${cor}`);
});


let coresOrdenadas: string[] = [...cores]; 
coresOrdenadas.sort();

console.log("\nOrdenar as cores::");
coresOrdenadas.forEach((cor, index) => {
    console.log(`${cor}`);
});

// ---------------

// lista 2 - q3

// import * as readlineSync from 'readline-sync';
// let numerosSet: Set<number> = new Set<number>();

// console.log("Digite 10 números inteiros:");

// for (let i = 0; i < 10; i++) {
//     let numero: number = readlineSync.questionInt(``);
//     numerosSet.add(numero);
// }

// let numerosOrdenados: number[] = Array.from(numerosSet).sort((a, b) => a - b);

// console.log("\nListar dados do Set::");
// numerosOrdenados.forEach((numero) => {
//     console.log(numero);
// });



