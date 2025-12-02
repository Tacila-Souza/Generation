//data 01/12/2025   - Condicional If



// 1 -

// let a = entrada.question("Informe o valor de A: ")
// let b = entrada.question("Informe o valor de B: ")
// let c = entrada.question("Informe o valor de C: ")

// a = parseFloat(a);
// b = parseFloat(b);
// c = parseFloat(c);

// if ((a + b)  > c) {
//     console.log(`A soma de (a) ${a} + (b) ${b} = ${a + b} e maior que (c) ${c} `)

// }else if ((a + b)  < c){
//     console.log(`A soma de (a) ${a} + (b) ${b} = ${a + b} e menor que (c) ${c} `)

// }else{
//     console.log(`A soma de (a) ${a} + (b) ${b} = ${a + b} e igual a (c) ${c} `)
// }


//-----------------


// 2 -

const entrada = require("readline-sync");

let n = entrada.question("Informe um numero: ")
n = parseFloat(n);

if (n % 2 == 0){
    if (n >= 0){
        console.log(`O numero ${n} e par e positivo`)
    }
    else{
        console.log(`O numero ${n} e par e negativo`)
    }
}
else{
    if (n >= 0){
        console.log(`O numero ${n} e impar e positivo`)
    }
    else{
        console.group(`O numero ${n} e impar e negativo`)
    }
}

//-----------------


