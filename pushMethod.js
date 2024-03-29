/*Esta e as próximas tarefas são necessárias para compreender melhor os métodos de array. Se você tiver dúvidas sobre como um método funciona, pode consultar a referência da MDN.

Método push do Array na MDN

Implemente o método push que repete a funcionalidade do método original. Use this dentro do método para acessar o array.

O uso de métodos de array está proibido nesta tarefa. Use loops, acesso por índice e o comprimento do array, se necessário.

Exemplo:

const numbers = [];
const newLength = numbers.push(10);
newLength === 1
numbers === [10]*/

const numbers = [1, 2, 3, 4, 5];

[].__proto__.push2 = function(...args) {

     for (let i = 0; i < args.length; i++) {
          this[this.length] = args[i]; 
     }

     return this.length;
}

const length = numbers.push2(3, 16);

console.log(numbers);

console.log(length);