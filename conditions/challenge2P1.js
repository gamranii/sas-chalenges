let prompt = require('prompt-sync')();

console.log("Menu principale");console.log("Menu principale");
console.log("MERHBA BIKOUM ENDI");


console.log("1 → Pizza")
console.log("2 → Burger")
console.log("3 → Tacos")
console.log("4 → Salade") 
let choix = +prompt('veullez entre votre choix  :')
let Quantité = +prompt("entrer la quantiter qui vous avez prendre:")

//condition ? exprIfTrue : exprIfFalse


switch (choix) {
    case (1):
        let a = 30;
        let total1 = a * Quantité;
        let result = (total1 >= 200) ? (total1 * 10) / 100 : console.log(total1);
        console.log(`le totale de votre commande est :${total1} DH `)
        console.log(`votre reduction est: ${result} DH`);
        break
    case (2):
        let b = 50;
        let total2 = b * Quantité;
        let result2 = (total2 >= 200) ? (total2 * 10) / 100 : console.log(total2);
        console.log(`le totale de votre commande est:${totale2} DH`)
        console.log(`votre reduction est : ${result2} DH`);
        break
    case (3):
        let c = 40;
        let total3 = c * Quantité;
        let result3 = (total3 >= 200) ? (total3 * 10) / 100 : console.log(total3);
        console.log(`total de votre commande est: ${total3} DH`);
        console.log(`votre reduction est: ${result3} DH`)
        break
    case (4):
        let x = 55;
        let total4 = x * Quantité;
        let result4 = (total4 >= 200) ? (total4 * 10) / 100 : console.log(total4)
        console.log(`total de votre commande est: ${total4}DH`);
        console.log(`votre reduction est : ${result4} DH`);
        break
    default:
        console.log('ne pas dons notre menu')
}

