//data 28/11/2025   - Variáveis e Operadores

const entrada = require("readline-sync");

// 1

// let salario = entrada.question("Digite o salario: ");
// let abono = entrada.question("Digite o abono: ");

// let NovoSalario = parseFloat(salario) + parseFloat(abono);

// console.log(`O novo salario é: ${NovoSalario}`)

//-------------------

// 2

// let nota1 = entrada.question("Digite a nota 1: ");
// let nota2 = entrada.question("Digite a nota 2: ");
// let nota3 = entrada.question("Digite a nota 3: ");
// let nota4 = entrada.question("Digite a nota 4: ");

// let MediaFinal = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

// console.log(`O resulado da média é: ${MediaFinal.toFixed(1)}`)


//-------------------

// 3

// let SalarioBruto = entrada.question("Digite o salario bruto: ");
// let AdNoturno = entrada.question("Informe o adicional noturno: ");
// let HorasExtras = entrada.question("Digite as horas extras: ");
// let Descontos = entrada.question("Informe o valor de desconto: ");

// let SalarioLiq = ( parseFloat(SalarioBruto) + parseFloat(AdNoturno) + (parseFloat(HorasExtras) * 5) - parseFloat(Descontos) )

// console.log(`O valor do salario liquido é: ${SalarioLiq}`)

//-------------------

// 4

let n1 = entrada.question("Digite o 1 numero: ");
let n2 = entrada.question("Digite o 2 numero: ");
let n3 = entrada.question("Digite o 3 numero: ");
let n4 = entrada.question("Digite o 4 numero: ");

let DifDoProd = parseFloat(n1) * parseFloat(n2) - parseFloat(n3) * parseFloat(n4)

console.log(`a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4 e: ${DifDoProd}`)