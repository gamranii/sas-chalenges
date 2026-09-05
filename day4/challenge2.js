function calculerAgeChien(ageHuman){
    return ageHuman*7
}
let prompt= require('prompt-sync')()
let ageHuman = +prompt('donner miu votre age:  ')

console.log(calculerAgeChien(ageHuman))