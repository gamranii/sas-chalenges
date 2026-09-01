const GB = 1024;
const MB = GB * 1024;
var prompt = require('prompt-sync')();
var n =prompt('entrer le stockage qui rest dans votre ordinateur par GB:  ');
console.log('le stockage qui reste dans votre ordinateur en migaocte est:  '+ parseInt(n)*GB + "MB");
