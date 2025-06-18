prompt = require('prompt-sync')();

let salarioAtual = Number(prompt("informe seu salário atual: "));
let novoSalario;

if(salarioAtual <= 280){
novoSalario = salarioAtual * 1.20;
console.log('Salário anterior: R$'+salarioAtual.toFixed(2), 'Salário com reajuste: R$'+novoSalario.toFixed(2)) 
}
if(salarioAtual > 280 && salarioAtual < 700){
novoSalario = salarioAtual * 1.15;
console.log('Salário anterior: R$'+salarioAtual.toFixed(2), 'Salário com reajuste: R$'+novoSalario.toFixed(2)) 
}
if(salarioAtual >= 700 && salarioAtual < 1500){
novoSalario = salarioAtual * 1.10;
console.log('Salário anterior: R$'+salarioAtual.toFixed(2), 'Salário com reajuste: R$'+novoSalario.toFixed(2)) 
}
if(salarioAtual >= 1500){
novoSalario = salarioAtual * 1.05;
console.log('Salário anterior: R$'+salarioAtual.toFixed(2), 'Salário com reajuste: R$'+novoSalario.toFixed(2)) 
}