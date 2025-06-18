prompt = require('prompt-sync')();

console.log('======Menu======');
console.log('1 - Converter Fahrenheit em Celsius');
console.log('2 - Converter polegadas de chuva em milímetros.');
let opcao = Number(prompt('Opção:'));

switch (opcao){

  case 1: 
  let fahrenheit = Number(prompt(('Informe a temperatura em Fahrenheit: ')));
  let celsius = ((5 * fahrenheit) - 160) / 9;
  console.log('O valor da temperatura é de '+celsius,'graus celsius'); break;

  case 2:
    
  let chuva = Number(prompt(('Informe a quantidade de chuva em polegadas: ')));
  const polegadaMilimetro = 25.4 
  let resultado = chuva * polegadaMilimetro;
  console.log('A quantidade de chuva é de '+resultado,'mm'); break;

  default: 
  console.log('Opção inválida!')    
}
