let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};
let labsencePrice = (employee.absenceDays*200)
console.log(`le salaire totale est ${employee.salary+employee.bonus-labsencePrice}DH`)
