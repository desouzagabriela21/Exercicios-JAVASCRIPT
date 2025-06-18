prompt = require('prompt-sync')();

let produto = Number(prompt('Informe o valor em dólar: '));
let dolarEmReais = Number(prompt('Informe a cotação atual do dólar em reais: '));
let resultado;

resultado = (produto * dolarEmReais);

console.log('O valor em reais é: R$', resultado.toFixed(2));
