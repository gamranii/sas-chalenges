let account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
};
const prompt = require ('prompt-sync')()
console.log(`votre solde est ${account.balance}`)

function Sold(deposer,retirer){
    deposer = +prompt('entre votre argent que tu peux diposer:')
    let sumAcc=account.balance+deposer
    let sumAcc2=sumAcc-retirer
    console.log(`pour le memont votre solde est ${sumAcc}`);
    retirer= +prompt(`entrer l'argent qui tu peux retirer:`)
    if(retirer>sumAcc){
        console.log("votre retire de l'argent est refuser")
    }
    if (retirer<0){
        console.log("votre retire de l'argent est refuser ")
    }
    if (retirer<=sumAcc && retirer>=0){
        console.log('le retire est etait faire par succes!')
        let sumAcc2=sumAcc-retirer
        console.log(`votre sold pour le memont ${sumAcc2} DH`);
    }retu
}
console.log(Sold())