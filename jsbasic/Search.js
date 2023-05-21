// ค้นหาข้อมูลใน Array
// IndexOf(ข้อมูล) => ผลกาารค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
//find(ข้อมูล)=>ผลกาค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ unfined
//findIndex(ข้อมูล)=> ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const colors = ["แดง","เขียว","น้ำเงิน","ม่วง","ขาว"]
// console.log(colors);

// const index = colors.indexOf("แดง")
// console.log(`ตำแหน่ง index คือ = ${index}`);

// const search = colors.find(element=>element==="เขียว")
// const search = colors.findIndex(element=>element==="เขียว")
// console.log(search)

const index = colors.indexOf("แดง")
console.log(index);