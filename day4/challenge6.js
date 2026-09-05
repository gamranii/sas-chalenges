
let prompt = require('prompt-sync')()
let motDePasse = prompt('entre votre mot de passe:')
console.log(verifierMotDePasse(motDePasse))

function verifierMotDePasse(mdp) {
    for (let i = 0; i <= 3; i++) {
        if (mdp.length >= 8 && mdp.includes('@')) {
            console.log('your modpass is true')
            break 
        
        }else 
            
        if (mdp.length < 8 ) {
            console.log('votre mots de false')
            mdp = prompt('entre votre mot de passe:')}
return 
    }
}



