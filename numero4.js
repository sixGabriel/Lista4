const prompt = require('prompt-sync')({sigint: true});


var i = 0
for (i = 0; i < 10; i++) {
    var a = parseFloat(prompt("digite uma nota: "))
    var b = parseFloat(prompt("digite uma nota: "))
    var c = parseFloat(prompt("digite uma nota: "))
    var d = parseFloat(prompt("digite uma nota: "))
    var e = parseFloat(prompt("digite uma nota: "))
    var f = parseFloat(prompt("digite uma nota: "))
    var g = parseFloat(prompt("digite uma nota: "))
    var h = parseFloat(prompt("digite uma nota: "))
    var i = parseFloat(prompt("digite uma nota: "))
    var j = parseFloat(prompt("digite uma nota: "))
    
    
}
    soma = a + b + c + d + e + f + g + h + i + j
    var media = soma / 10
    console.log(soma)
    console.log(media)
    