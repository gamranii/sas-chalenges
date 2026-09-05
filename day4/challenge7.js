let prompt =require('prompt-sync') ()
let obtnr1 = +prompt(`donner moi l'heure actu :`)
let obtnr2 = +prompt( 'donner moi min actu : ')
let obtnr3 = +prompt('donner moi ss actu :')

function obtenirHeureActuelle(){
    let  time = `${obtnr1}:${obtnr2}:${obtnr3}`
return time
}
console.log(obtenirHeureActuelle(454))