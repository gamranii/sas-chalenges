function trouverMax(...tab) {
    let i = 0;
    let max = 0;;
    while (i < tab.length) {
        if (tab[i] > max)
            max = tab[i]
        i++;
    }
    return max;

} console.log(trouverMax(0, 54, 1, 6, 4))