// Declaração usando var
var x = 10;
console.log(x); // Saída: 10

// var permite a reatribuição de valores
x = 20;
console.log(x); // Saída: 20

// var tem escopo de função ou global
function varTest() {
    var y = 30;
    if (true) {
        var y = 40; // Mesma variável, escopo de função
        console.log(y); // Saída: 40
    }
    console.log(y); // Saída: 40
}
varTest();

// Declaração usando let
let a = 10;
console.log(a); // Saída: 10

// let permite a reatribuição de valores
a = 20;
console.log(a); // Saída: 20

// let tem escopo de bloco
function letTest() {
    let b = 30;
    if (true) {
        let b = 40; // Variável diferente, escopo de bloco
        console.log(b); // Saída: 40
    }
    console.log(b); // Saída: 30
}
letTest();

// Declaração usando const
const c = 10;
console.log(c); // Saída: 10

// const não permite a reatribuição de valores
// c = 20; // Erro: Assignment to constant variable.

// const tem escopo de bloco
function constTest() {
    const d = 30;
    if (true) {
        const d = 40; // Variável diferente, escopo de bloco
        console.log(d); // Saída: 40
    }
    console.log(d); // Saída: 30
}
constTest();

// Constantes com objetos e arrays
const obj = { name: 'Alice' };
console.log(obj.name); // Saída: Alice

// Pode-se mudar as propriedades de um objeto constante
obj.name = 'Bob';
console.log(obj.name); // Saída: Bob

// Não se pode reatribuir um objeto constante
// obj = { name: 'Charlie' }; // Erro: Assignment to constant variable.

const arr = [1, 2, 3];
console.log(arr); // Saída: [1, 2, 3]

// Pode-se modificar os elementos de um array constante
arr.push(4);
console.log(arr); // Saída: [1, 2, 3, 4]

// Não se pode reatribuir um array constante
// arr = [5, 6, 7]; // Erro: Assignment to constant variable.
