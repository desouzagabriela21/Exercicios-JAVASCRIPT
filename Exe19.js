prompt = require("prompt-sync")();

let numero = 0;
let quantidadeNumeros = 1;
let maior = 0;

while (quantidadeNumeros <= 10){
numero = Number(prompt("Informe um número: "));
 if (numero > maior){
     maior = numero;  
  }
  quantidadeNumeros++;
  }
  console.log(maior);


  
  
