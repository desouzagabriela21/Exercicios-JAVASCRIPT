prompt = require('prompt-sync')();

let valorSalarioAtual = Number(prompt('Informe o valor atual do seu salário: '));
let reajuste = Number(prompt('Informe o percentual de reajuste: '));

let resultado = valorSalarioAtual + ((valorSalarioAtual / 100) * reajuste);

console.log('O valor do salário com reajuste é: ', resultado);
