var prompt = require('prompt-sync')();
var k = prompt ('La distance parcourue en kilomètres   :' );
var h = prompt ('La quantité de carburant consommée en litres   :');
console.log('la consomation moyenne en litres / 100km:');
//Consommation = (litres / kilomètres) * 100
let consommation = (h/k)*100;
console.log('la Consommationest est :'+ consommation +" "+ "L/100 km" );
console.log(typeof(consommation));
