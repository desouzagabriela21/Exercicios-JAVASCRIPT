prompt = require('prompt-sync')();

let numero = Number(prompt('Informe um número entre 0 e 10: '));

do {
  console.log('Número inválido!');
  numero = Number(prompt('Informe um número entre 0 e 10: '));
} while (numero < 0 || numero > 10);

console.log('Obrigada!');
 

