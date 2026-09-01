//chalenge 2


// const { log } = require('console');
// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });
// rl.question('entrer le nombre de dirham: ', (answer) =>{

//     console.log("Le montant en EUR est: " + answer/11);
    
// });

 
var prompt = require('prompt-sync')();

var n = prompt(' entrer le stockage de votre tephone: ');

console.log(typeof(n));

console.log("Le le stockage de votre telephone par MB est " + parseFloat(n)*1024 +" "+ "MB");

