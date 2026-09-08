const employees = [
    {
        "name": "Alice Johnson",
        "age": 29,
        "department": "Engineering",
        "salary": 75000
    },
    {
        "name": "Bob Smith",
        "age": 34,
        "department": "Marketing",
        "salary": 68000
    },
    {
        "name": "Carol Williams",
        "age": 41,
        "department": "Finance",
        "salary": 82000
    },
    {
        "name": "David Brown",
        "age": 26,
        "department": "Human Resources",
        "salary": 61000
    }
]
function AvgAge(){
    let age = 0
    for (i = 0; i < employees.length; i++) {
        age += employees[i].age
        
    } return age / employees.length
}
function countByDe(name,list){
    let compteur = 0
    for (i = 0;i<list.length;i++){
        if (name==list[i].department){
            compteur++

        }
    }return compteur


}
function FindMaxSalary(){
    let max = 1 ;
    for (i = 0;i<employees.length;i++){
        if (employees[i].salary>max){
            max = employees[i].salary
            
        }
    }return max

}
console.log("Average Age:", AvgAge());
console.log("Engineering Count:", countByDe("Engineering", employees));
console.log("Max Salary:", FindMaxSalary());







