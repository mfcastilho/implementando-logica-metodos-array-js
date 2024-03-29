/*Método pop do Array na MDN

Implemente o método pop, que repete a funcionalidade do método original. Use this dentro do método para acessar o array.

O uso de métodos de array está proibido nesta tarefa. Use loops, acesso por índice e o comprimento do array, se necessário.

Exemplo:

const numbers = [1, 2, 3, 4, 5];
const removedElement = numbers.pop();
removedElement === 5;
numbers === [1, 2, 3, 4];*/

const numbers = [1, 2, 3, 4, 5];

[].__proto__.pop2 = function() {
     const removedItem = this[this.length - 1];
     this.length = this.length - 1;

     return removedItem;
}


console.log(numbers);

console.log(numbers.pop2());
console.log(numbers);

console.log(numbers.pop2());
console.log(numbers);