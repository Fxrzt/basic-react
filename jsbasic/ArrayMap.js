//Array Map เป็นการนำเอาค่าสมาชิกภายใน array
//มาทำการเปลี่ยนแปลงค่า แล้วก็สร้างเป็น array ก้อนใหม่ออกมาใช้งาน

// const numbers = [10,20,30,40]

// const result = numbers.map(e=>{
//     const a = e*2
//     return a
// })
// console.log(numbers)
// console.log(`Array Map = ${result}`)
//[10,20,30,40]
//[10*2,20*2,30*2,40*2]
//[20,40,60,80]

// const data = ["ฝนตก","แดดร้อน","ฝนฟ้าคะนอง","แดดร้อน","ฝนตก","อากาศดี","หมอก"]
// const result = data.map((e,i)=>{
//     return `วันที่ ${i+1}, สภาพอากาศ =${e}`
// })
// console.log(data)
// console.log(result)

const data = [
    {day:"01/06/64",weather:"ฝนตก",temp:27},
    {day:"02/06/64",weather:"แดดร้อน",temp:35},
    {day:"03/06/64",weather:"ฝนฟ้าคะนอง",temp:23},
    {day:"05/06/64",weather:"ฝนตก",temp:25},
]

const result = data.map(e=>{
    return e
})

console.log(result)