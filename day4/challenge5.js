function additionnerTout(...args){
    let total = 0

    for (i = 0;i < args.length; i++){
        total +=  args[i]
    }
    return total;
}
console.log(additionnerTout(654,684,88,1))