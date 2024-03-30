/*Implemente o método unshift, que repete a funcionalidade do método original. Use this dentro do método para acessar o array.

O uso de métodos de array está proibido nesta tarefa. Use loops, acesso por índice e o comprimento do array, se necessário.

Exemplo:

const numbers = [1, 2, 3, 4, 5];
const newLength = numbers.unshift(71);
newLength === 6;
numbers === [71, 1, 2, 3, 4, 5];*/

const numbers = [1, 2, 3, 4, 5];

[].__proto__.unshift2 = function(...args) {
  const newArr = [];

  for (let i = 0; i < args.length; i++) {
    newArr[i] = args[i];
  }
  
  for (let i = 0; i < this.length; i++) {
    newArr[args.length + i] = this[i];
  }

  for (let i = 0; i < newArr.length; i++) {
    this[i] = newArr[i];
  }

  return this.length;
}

// console.log(numbers.unshift2(71, 68));

console.log(numbers.unshift2());
