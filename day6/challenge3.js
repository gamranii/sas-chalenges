let prompt = require('prompt-sync')()
let prodctUs = prompt ( 'enter votre produit :')
let quantitUs = +prompt ('entrer votre quantite vous vouller prendre :')

let produit = {
    name:'cocacola',
    price:12,
    category:'boisson',
    quantity:10
    
}

if (prodctUs == produit.name){
    console.log(`le produit est disponible`);
    if (quantitUs<=produit.quantity){
        console.log(`le prix totatl est ${produit.price*quantitUs}`)

    }else{
        console.log(`la  dans ce produit est ${produit.quantity}`);
        
    }
    
}else {
    console.log('le produit ne pas das notre magasine')
}

