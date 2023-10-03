function calcularMontante(capitalInicial, taxaDeJuros, tempoEmMeses) {
    taxaDeJuros = taxaDeJuros / 100;
    var montante = capitalInicial * Math.pow(1 + taxaDeJuros, tempoEmMeses);
    montante = parseFloat(montante.toFixed(2));
    return montante;
}
//Pede os valores ao usuário//
var capitalInicial = parseFloat(prompt("Digite o capital inicial:"));
var taxaDeJuros = parseFloat(prompt("Digite a taxa de juros mensal (%):"));
var tempoEmMeses = parseInt(prompt("Digite o tempo de investimento (em meses):"));
var resultado = calcularMontante(capitalInicial, taxaDeJuros, tempoEmMeses);
//Resultado final//
console.log("O montante do investimento é: " + resultado);
