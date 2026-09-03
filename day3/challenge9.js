let prompt = require('prompt-sync')()
let base = +prompt('donner moi nombre base:')
let exposant = +prompt('donner moi nombre exposant:')

let rusolt = base**exposant
while (true ){
    console.log('rusolution est : '+rusolt)
    break
}

    
    
