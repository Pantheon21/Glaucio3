var paísA = 8000;
var paísB = 20000;
var ano = 0;

while (paísA != paísB) {
    ano++;
    paísA = Math.round(paísA * 1.03);
    paísB = Math.round(paísB * 1.015);
}
//Aqui mostra quantos anos precisam e a população final//
console.log(paísA)
console.log(paísB)
console.log(ano)