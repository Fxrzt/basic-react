//Array Reduce เป็นการลดข้อมูลสมาชิกภายใน array
//ต้องการนำเอาสมาชิกภายใน array ทั้งหมด มาดำเนินการ สักอย่างนึง
//เพื่อให้ได้คำตอบเพียงตำตอบนึงกลับไป

const data =[10,20,30,40]

// const mapData = data.map(e=>100)
// console.log(mapData);
//[100,100,100,100]

//array.reduce((ค่าที่ถูกประมวลผล,e)=>{},ต่าเริ่มต้น) // value = 0

 const sumation = data.reduce((value,e)=>{
    //console.log(value)
    const total = e+value
    return total
},0)


//console.log(sumation)

//********--------------1-------------******* */

// value = 0

// total = 10+0(value)

//********--------------2-------------******* */

// value = 10

// total = 10 + 20

//--------------------------------------->>>>>>>

// value = 60

// total = 60 + 40 = 100

const cart = [
    {
        name:"backpack",
        price:500
    },
    {
        name:"book",
        price:300
    },
    {
        name:"camera",
        price:1200
    }
]

const result = cart.reduce((value,e)=>{
    const total = e.price+value
    return total
},0)

console.log(result)