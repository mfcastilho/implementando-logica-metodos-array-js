/*Implemente o método shift, que repete a funcionalidade do método original. Use this dentro do método para acessar o array.

O uso de métodos de array está proibido nesta tarefa. Use loops, acesso por índice e o comprimento do array, se necessário.

Exemplo:

const numbers = [1, 2, 3, 4, 5];
const removedElement = numbers.shift();
removedElement === 1
numbers === [2, 3, 4, 5]*/

const numbers = [1, 2, 3, 4, 5];

[].__proto__.shift2 = function() {
  if (this.length === 0) {
    return undefined;
  }

  const deletedItem = this[0];

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  this.length--;

  return deletedItem;
};
console.log(numbers);
console.log(numbers.shift2());
console.log(numbers);