let prompt = require('prompt-sync')();
let x = +prompt ('vellez entrer votrer votre note: ')
if (x<10){
    console.log('echec')
} else if (10 <= x && x <= 11.99 ){
    console.log('passable')
}else if ( 12 <= x && x <= 13.99){
    console.log ( 'assez bien')
}else if (14 <= x && x <= 15.99){
    console.log('bien')

} else if (16 <= x && x <= 17.99){
    console.log('tres bien')
} else if (18 <= x && x <= 20){
    console.log('excellent')
}else{
    console.log('votre note ne pas entre 0 et 20')
}
