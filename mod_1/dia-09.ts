import { Queue } from "./Queue.ts";

const fila = new Queue<String>();

import * as readlineSync from 'readline-sync';

let opcao: number;

do {
    console.log("\n********************************");
    console.log("1 - Adicionar Cliente na fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - retirar cliente da fila");
    console.log("0 - Sair");
    console.log("\n********************************");

    opcao = readlineSync.questionInt("Digite uma opcao: ");

switch (opcao) {
        case 1:
            const nome = readlineSync.question("Digite o nome: ");
             fila.enqueue(nome);
            console.log(`Fila:`);
            fila.printQueue();
            console.log(`\nCliente adicionado!`);
            break;

        case 2:
            if (fila.isEmpty()) {
                console.log("A fila esta vazia!");
            } else {
                console.log("\nLista de clientes na fila:");
                fila.printQueue();
            }
            break;

        case 3:
            if (fila.isEmpty()) {
                console.log("A fila esta vazia.");
            } else {    
                console.log(`Fila:`);
                const cliente = fila.dequeue();
                
                if (cliente !== undefined) {
                fila.printQueue();
                }
            }
            break;

        case 0:
            console.log("Saindo do programa...");
            break;

        default:
            console.log("Opcao invalida, tente novamente.");
            break;
    }

} while (opcao !== 0);

//-----------------------------------

// import { Stack } from "./Stack.ts";

// const pilha = new Stack<string>();

// import * as readlineSync from 'readline-sync';

// let opcao: number;

// do {
//     console.log("\n********************************");
//     console.log("1 - Adicionar Livro na Pilha");
//     console.log("2 - Listar todos os Livros");
//     console.log("3 - Retirar Livro da Pilha");
//     console.log("0 - Sair");
//     console.log("********************************");

//     opcao = readlineSync.questionInt("Digite uma opcao: ");

//     switch (opcao) {

//         case 1:
//             const livro = readlineSync.question("Digite o nome do livro: ");
//             pilha.push(livro);
//             console.log("\nPilha:");
//             pilha.printStack(); // equivalente ao printQueue
//             console.log("\nLivro adicionado!");
//             break;

//         case 2:
//             if (pilha.isEmpty()) {
//                 console.log("A pilha está vazia!");
//             } else {
//                 console.log("\nLivros na pilha:");
//                 pilha.printStack();
//             }
//             break;

//         case 3:
//             if (pilha.isEmpty()) {
//                 console.log("A pilha está vazia.");
//             } else {
//                 console.log("Pilha:");
//                 const removido = pilha.pop();

//                 if (removido !== undefined) {
//                     pilha.printStack();
//                     console.log("Um livro foi retirado da pilha!");
//                     console.log(`\nLivro retirado: ${removido}`);
//                 }
//             }
//             break;

//         case 0:
//             console.log("Saindo do programa...");
//             break;

//         default:
//             console.log("Opção inválida, tente novamente.");
//             break;
//     }

// } while (opcao !== 0);
