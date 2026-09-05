let prompt = require('prompt-sync')()
let N = Number(prompt('entrer nombre d article de votre achat:'))
let prix = 125
if (N=0){
    console.log('votre total est 0 DH')

}else if (N=1){
    console.log(`votre totale est ${N*1}il y a aucun remise`)
}
let remise=(2*10)/100
let totale=0
let j =0
while (j<=N-1){
    totale=prix+(((N-1)*(prix)*(remise)))
    j++
    
}