/*1ère heure  → 5 DH
2ème heure  → 3 DH
3ème heure  → 3 DH
Chaque heure supplémentaire → 2 DH*/
let prompt = require('prompt-sync')();
let actions = +prompt(' veullez choisir le temps tu peux rester:');
let a = 1;
let b = 2;
let c = 3;

if (actions == a){
    console.log ('voullez payer 5 DH');

}else if ( actions == b){
    console.log('veullez payer: 8 dh');
}else if (actions == c){
    console.log('veullez payer: 11 dh ');
}else {
    let tax = actions * 2;
    console.log(`veullez payer: ${tax.toFixed(2)} DH ` );
}