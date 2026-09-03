//Challenge 13 : Système de réservation
let prompt = require('prompt-sync')();
/*Un hôtel possède trois types de chambres :

Standard
Deluxe
Suite
Le prix dépend :

du type de chambre
du nombre de nuits
de la saison*/
console.log('il y a troi type de chambre:')
console.log('1-Standare')
console.log('2-Deluxe')
console.log('3-Suite')
let ctype = +prompt('veullez entrer votre types de chambre:')
//let prix = [300 , 600 , 100]
let nuit = +prompt('vellez entrer les nuit qui tu a voudrais de reserver:')
//let une = 300
let mois = +prompt ('veullez entre le mois preferait pour votre reservation par number entre mois 1 et 12:')
let reserv= ctype + nuit + mois

switch (ctype) {

    case (1):
        console.log('le prix dune nuit en STANDARE est: 300 DH ')
        let stndr = 300
        break
    case (2) : 
        console.log('le prix dune nuit en DELUXE est: 600 DH ')
        let dlx = 600
        break
    case (3):
        console.log('le prix dune nuit en SUITE est : 1000 DH')
        let suit = 1000
        break
    default:
        console.log('votre type de chambre ne pas dispo!')

     let prix = [stndr , dlx , 100]   
console.log(`votre totale que tu peux pay est : ${prix*nuit * mois} `)
}

