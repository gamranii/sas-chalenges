// Challenge 09 — Recherche avancée

let products = [
    {
        id: 1,
        name: "Laptop",
        category: "Informatique",
        price: 7500
    },
    {
        id: 2,
        name: "Phone",
        category: "Smartphone",
        price: 3500
    },
    {
        id: 3,
        name: "Keyboard",
        category: "Informatique",
        price: 500
    },
    {
        id: 4,
        name: "Monitor",
        category: "Informatique",
        price: 2200
    }
];

function rechercherParId(id) {

    let x;
    for (i = 0; i < products.length; i++) {
        if (id == products[i].id) {
            return products[i];
        }
    }
}
console.log('le rechairche par id est :');
console.log(rechercherParId(3));

function rechercherParNom(...nom) {
    let result = []

    for (i = 0; i < products.length; i++) {
        for (let j = 0; j < nom.length; j++) {
            if (nom[j] == products[i].name) { 
                result.push(products[i])
            }
        }

    }return result
}
console.log('le rechairche par nom est :');
console.log(rechercherParNom("Monitor", "Keyboard"))

function rechercherParCategorie(...tab){
    let result = []
    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < tab.length; j++) {
            if (tab[j] == products[i].category) { 
                result.push(products[i])
            }
        }
    }return result

}
console.log('le rechairche par categorie est :');
console.log(rechercherParCategorie("Informatique","Smartphone"));

function rechercherParPrix(...tib){
    let result = []
    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < tib.length; j++) {
            if (tab[j] == products[i].category) { 
                result.push(products[i])
            }
        }
    }return result
}
console.log('le rechairche par prix est :');
console.log(rechercherParCategorie(2200,7500));