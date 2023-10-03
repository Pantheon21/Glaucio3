//var salario = 1000//
var salarioinicial = prompt("Digite o salário inicial");
var aumento = 1.015
var salario = salarioinicial * aumento;
var ano = 1997;

for(ano; ano <= 2023; ano++) {
    aumento = aumento * 2;
    salario = salario * aumento;
}
//Salário atual//
console.log(salario)
