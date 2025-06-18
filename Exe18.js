prompt = require("prompt-sync")();

let numero = Number(prompt("Informe um número: "));
let n1 = 0;
let n2 = 1;
let n3;
let i;

  console.log(n2)
  for(i = 1; i < numero; i++){
  n3 = n1 + n2;
  console.log(n3);
  n1 = n2;
  n2 = n3; 
}





  
  
