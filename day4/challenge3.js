function genererEmail(fName,sName){
    let a = fName.toLowerCase()
    let b = sName.toLowerCase()
    let email = `${a}.${b}@entreprise.com`
    return email
}
console.log(genererEmail('IHGRHZO','ZREJOA'))