let prompt = require('prompt-sync')()
let num = +prompt ('entrer un nombre :')
let i=0
while (i<num){
    console.log(num)
    num-=1
}