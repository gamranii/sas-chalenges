let prompt = require('prompt-sync')()
let N = prompt(' enter un num a votr choix:')
let somme = 0
let exp=" "


for (i=0;i<=N;i++){
    somme+=i
    
    if (i<=N){
        exp+=i + "+"
    }
  
}
console.log(`la valeur de somme entre 0 et ${N} est:${somme}`)
console.log(`car ${exp} = ${somme}`)

