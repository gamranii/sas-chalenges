let students = [
    { name: "Ali", note: 15 },
    { name: "Sara", note: 8 },
    { name: "Omar", note: 17 },
    { name: "Imane", note: 11 },
    { name: "Yassine", note: 6 }
];
for (let student of students){
    console.log(`etudiant : ${student.name}, Note : ${student.note}`);
}
let compteur1=0
let compteur2=0
for ( let admie of students){
    if (admie.note>=10){
        console.log(`etudiant : ${admie.name} etait admie`)
        compteur1++
    }else {
        console.log(`etudiant : ${admie.name} non admie`)
        compteur2++
    }
   
}
console.log(`les estudiant admie son: ${compteur1} ,et non admir son: ${compteur2}`)
