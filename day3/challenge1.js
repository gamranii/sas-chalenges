let prompt = require("prompt-sync")()
let answer = +prompt("entrer un num par ten choix:")
for (i=1;i<=answer;i++){
    console.log('participent', i)
}
