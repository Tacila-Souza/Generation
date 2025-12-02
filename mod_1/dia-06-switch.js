const entrada = require("readline-sync");

// lista 2 - switch 
// q 5

let cod = entrada.questionInt("Informe o codigo do item: ")
let qnt = entrada.questionInt("Informe a quantidade do item: ")

let produto
let preco

switch (cod){
    case 1:
        produto = "cachorro quente"
        preco = 10.00
        break
    case 2:
        produto = "X-salada"
        preco = 15.00
        break
    case 3:
        produto = "X-bacon"
        preco = 18.00
        break
    case 4:
        produto = "Bauru"
        preco = 12.00
        break
    case 5:
        produto = "Refrigerante"
        preco = 8.00
        break
    case 6:
        produto = "Suco de laranja"
        preco = 13.00
        break
    default:
        console.log("Codigo invalido!")
}

let total = preco * qnt

console.log(`\nProduto: ${produto}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);


// q 6 -

// let nome = entrada.question("Nome do colaborador: ")
// let cod = entrada.questionInt("Cargo: ")
// let salario = entrada.questionFloat("Salario: ")

// switch (cod){
//     case 1:
//         console.log(` Nome do colaborador: ${nome}`)
//         console.log(`Cargo: Gerente`);
//         NovoSalario = salario * 1.10
//         console.log(`Salario: R$ ${NovoSalario}`);
//         break

//     case 2:
//         console.log(` Nome do colaborador: ${nome}`)
//         console.log(`Cargo: Vendedor`);
//         NovoSalario = salario * 1.07
//         console.log(`Salario: R$ ${NovoSalario}`);
//         break

//     case 3:
//         console.log(` Nome do colaborador: ${nome}`)
//         console.log(`Cargo: Supervisor`);
//         NovoSalario = salario * 1.09
//         console.log(`Salario:  R$ ${NovoSalario}`);
//         break

//     case 4:
//         console.log(` Nome do colaborador: ${nome}`)
//         console.log(`Cargo: Motorista`);
//         NovoSalario = salario * 1.06    
//         console.log(`Salario: R$ ${NovoSalario}`);
//         break

//     case 5:
//         console.log(` Nome do colaborador: ${nome}`)
//         console.log(`Cargo: Estoquista`);
//         NovoSalario = salario * 1.05
//         console.log(`Salario: R$ ${NovoSalario}`);
//         break

//     case 6:
//         console.log(` Nome do colaborador: ${nome}`)
//         console.log(`Cargo: Tecnico de TI`);
//         NovoSalario = salario * 1.08
//         console.log(`Salario: R$ ${NovoSalario}`);
//         break
        
//     default:
//         console.log("Codigo do cargo invalido")
// }
