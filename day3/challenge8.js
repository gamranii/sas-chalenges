let prompt = require('prompt-sync')()
let mission = +prompt('donner moi votre number de mission finished:')
let score = 100
let i =1
while (i<=mission){
    console.log('mission ',i ,' , score est :', score*i)
    i++
}