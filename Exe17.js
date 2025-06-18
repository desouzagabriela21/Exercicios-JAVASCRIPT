prompt = require('prompt-sync')();

let numero;
let par = 0;
let impar = 0;

for(i = 1; i <= 10; i++){
numero = Number(prompt("Informe um número: "));
if ((numero % 2) == 0){
  par++
}
if ((numero % 2) != 0){
    impar++
  }
}
console.log('Total de números pares: '+par); 
console.log('Total de números ímpares: '+impar); 

