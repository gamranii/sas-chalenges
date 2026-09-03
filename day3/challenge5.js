let prompt = require('prompt-sync')()
let N = +prompt ('entrer  un nombre N : ')
let X = +prompt('entrer un nembre X : ')


for ( i = X ; i <= N ; i+=X ){
    
    console.log(i)

}