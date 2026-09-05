function afficherElements(...tab){
    i=0
    cont=0
    while (tab[i]){
        console.log(tab[i])
        i++
    }
    return cont
}
console.log(afficherElements(5,7,8,9,5,4,5,"dfqdf"))