var prompt = require('prompt-sync')();
var k = prompt ('donnez moi la duree du film :' )
//Moins de 60 minutes → Court métrage
//De 60 à 120 minutes → Film standard
//Plus de 120 minutes → Film long
if (k <60){
    console.log("Court métrage")
} else if (60< k && k<120){
    console.log("Film standard")
} else {
    console.log("Film long")
}