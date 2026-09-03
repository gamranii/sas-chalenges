let prompt = require('prompt-sync')()
let num = +prompt('ecriver un nembre a votre choix:')

for (i=0;i<=10;i++){
    console.log(num + " x " + i + " = " + num*i)
}
