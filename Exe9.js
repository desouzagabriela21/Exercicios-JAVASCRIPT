prompt = require('prompt-sync')();

let taxaFixa = Number(prompt('Informe valor da taxa fixa: '));
let taxaKm = Number(prompt('Informe o valor da taxa por Km rodado: '));
let nDias = Number(prompt('Informe a quantidade de dias alugados: '));
let nKmRodado = Number(prompt('Informe a quantidade de Km rodados: '));

valorTotal = ((taxaFixa * nDias) * 0.90) + (taxaKm * nKmRodado); 
descontoTOTAL = (taxaFixa * nDias) * 0.10;

console.log('O valor total do aluguél é de R$ '+valorTotal,'com R$ '+descontoTOTAL,'de desconto, em '+nDias,'e '+nKmRodado,'quilômetros rodados');