let etudiant = [{
    ID : 3,
    Nom : 'Omar',
    Age : 19 

}]
let prompt = require('prompt-sync')()
let id = +prompt('entrer votre id sil vous plait:')
let name = prompt ('etrer votre nom:')
let age = +prompt ('entrer votre age:')
if (id === etudiant[0].ID && name===etudiant[0].Nom && age ===etudiant[0].Age){
    console.log(`bonjour ${etudiant[0].Nom} `)
}else{
    console.log('Aucun étudiant trouvé avec cet ID.')}

function rechercherEtudiant(id){
    etudiant.id = id
    etudiant.name = name
    etudiant.age = age
}