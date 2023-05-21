//splice & slice
//splice(ตั้งแต่ตำแหน่งที่จะลบ,จำนวนที่จะลบ,แทรกเข้าไปในตำแหน่งที่ลบ) ลบสมาชิก
//slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย-1) ดึงสมาชิกจาก array มาใช่งาน ไม่กระทบโครงสร้าง

const data = [10,20,30,40,50]
console.log(data)
// data.splice(1,3,100)
const lastdata = data.slice(1,3)
console.log(lastdata)