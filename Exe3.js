prompt = require('prompt-sync')();

let valorHora = Number(prompt('Informe o valor da hora trabalhada: '));
let horasTrabalhadas = Number(prompt('Informe a quantidade de horas trabalhadas: '));

let resultado = (valorHora * horasTrabalhadas) * 0.94;

console.log('O valor do salário com desconto é: ', resultado);
