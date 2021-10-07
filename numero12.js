const prompt = require('prompt-sync')({ sigint: true })

var  num = 1001
var  cont = 1
var solucao
for (cont = 1; cont <= 5;) {

    if(num % 11 == 5) {
         cont++
    } 
    if(cont == 5) {
       solucao = num
    }
    num++
}   
    console.log(num)