//Array Fliter ใช้ในการคัดกรอง สมาชิกภายใน array ที่ผ่านเงื่อนไขตามที่กำหนด

// const data = [10,20,30,40]
// console.log(data)

// const result = data.filter(e=>{
//     return e>10
// })

// console.log(result)

const employee = [
    {
        name:"Fxrzt",
        salary:25000,
        department:"React Develop"
    },
    {
        name:"Force",
        salary:30000,
        department:"Leader Marketing"
    },
    {
        name:"Free",
        salary:15000,
        department:"Junior Programer"
    },
    {
        name:"Frozen",
        salary:45000,
        department:"Senior Programer"
    },
    {
        name:"Frace",
        salary:5000,
        department:"Accouting"
    }
]

const findsalary = employee.filter(e=>{
    return e.salary>10000
}).filter(e=>{
    return e.department === "React Develop"
})

console.log(findsalary)