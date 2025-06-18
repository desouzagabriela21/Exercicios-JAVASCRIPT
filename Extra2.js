prompt = require('prompt-sync')();

let data = prompt('Informe uma data no formato "dd/mm/aa": ');
let partes = data.split('/', 3);

while (partes[0] >= 32 
       ||partes[0] <= 0 
       ||partes[1] > 12
       ||partes[1] <= 0 
       ||partes[2] <= 0){
  console.log("Data inválida")
  data = prompt('Informe uma data no formato "dd/mm/aa": ');
}

if (partes[1] === "01") {
    partes[1] = "de Janeiro de";
   }
if (partes[1] === "02") {
    partes[1] = "de Fevereiro de";
 }
if (partes[1] === "03") {
   partes[1] = "de Março de";
 }
if (partes[1] === "04") {
   partes[1] = "de Abril de";
 }
if (partes[1] === "05") {
   partes[1] = "de Maio de";
 }
if (partes[1] === "06") {
   partes[1] = "de Junho de";
 }
if (partes[1] === "07") {
   partes[1] = "de Julho de";
 }
if (partes[1] === "08") {
   partes[1] = "de Agosto de";
 }
if (partes[1] === "09") {
   partes[1] = "de Setembro de";
 }
if (partes[1] === "10") {
   partes[1] = "de Outubro de";
 }
if (partes[1] === "11") {
   partes[1] = "de Novembro de";
 }
if (partes[1] === "12") {
   partes[1] = "de Dezembro de";
 }

let dataExcrita = partes.join(" ");
console.log(dataExcrita)
