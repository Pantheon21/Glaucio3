
var N = parseInt(prompt("Digite a quantidade de números:"));
var numeros = [];

for (var i = 0; i < N; i++) {
    var numero = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
    if (!isNaN(numero)) {
        numeros.push(numero);
    } else {
        alert("Número inválido. Tente novamente.");
        i--; 
    }
}

    var menor = Math.min(...numeros);
    var maior = Math.max(...numeros);
    var soma = numeros.reduce((acc, num) => acc + num, 0);

    console.log("O menor valor é: " + menor);
    console.log("O maior valor é: " + maior);
    console.log("A soma dos valores é: " + soma);
