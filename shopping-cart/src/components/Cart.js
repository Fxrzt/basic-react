// component จัดการตะกร้าสินค้า
import {MyCartContext} from "../management/context"
// import CartData from "../data/CartData"
import CardItem from './CartItem'

const Cart = () => {
    const {cart,total,formatNumber} = MyCartContext()
    console.log("ข้อมูลใน cart = ",cart);
    // console.log(MyCartContext())

    if(cart.length === 0){
        //ไม่มีสินค้าในตะกร้า
        return(
            <div className="shopping-cart">
                <h1 className="empty">ไม่มีสินค้าในตะกร้า</h1>
            </div>
        )
    }else{
        return(
        <div className='shopping-cart'>
            <div className='title'>สินค้าในตะกร้า</div>
                {cart.map((data)=>{
                    // console.log(data)
                    //นำ attribute หรือ property ที่เป็นข้อมูลของ object แต่ละตัว มากำหนดให้กับ <CardItem/>
                    //เราก็จะได้ตัว property ที่มีชื่อเหมือนกันกับชื่อ attribute หรือว่าชื่อ property ที่อยู่ใน object แต่ละตัวที่ทำงานภายใน array cart data
                    return <CardItem key={data.id} {...data} />
                })}
            <div className='footer'>ยอดชำระเงินรวม {formatNumber(total)} บาท</div>
        </div>
    )
    }
}

export default Cart