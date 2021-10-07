const prompt = require('prompt-sync')({ sigint: true })

var maiorAlt = 0, menorAlt = 0, mediaAltMulher = 0, mediaAlt = 0, percHomens = 0
var qtdHomens = 0
var qtdMulheres = 0
var sexo, altura, N = 50

for (x = 0; x < N; x++) {
    sexo = prompt("Sexo ((0 = masc, 1 = fem): ")
    altura = prompt("Altura: ")

    mediaAlt += altura
    if (sexo == 0) {
        qtdHomens++
    } else {
        mediaAltMulher += altura
        qtdMulheres++
    }
    if (altura > maiorAlt) {
        maiorAlt = altura
    }
    if (altura < menorAlt || menorAlt == 0) {
        menorAlt = altura
    }
}
     function calculaMedia() {
    mediaAlt /= N
    mediaAltMulher /= qtdMulheres;
    percHomens = qtdHomens * 100 / N
} function imprime() {
    console.log("\tResultado\n") //\t = espaço de um tab
    console.log("\t==========\n")
    console.log("Maior altura = ", maiorAlt)
    console.log("Menor altura = ", menorAlt)
    console.log("Media altura = ", mediaAlt)
    console.log("Media altura Mulheres = ", mediaAltMulher)
    console.log("Percentual = ", percHomens)
} var x

calculaMedia()
imprime()
return 1
