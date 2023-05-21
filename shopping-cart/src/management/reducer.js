//กำหนด action ใน app

// state = ที่ต้องการอยากให้เกิด action
// action = รูปแบบการกระทำที่กระทำต่อ state ดังกล่าว
const reducer=(state,action)=>{
    if(action.type === "REMOVE_ITEM"){
        return{
            ...state,
            cart:state.cart.filter((item)=>item.id !== action.payload)
        }
        
    }
    if(action.type === "TOGGLE_QUANTITY"){
        // console.log("เรียกใช้งาน Action")
        let newCart = state.cart.map((item)=>{
            if(item.id === action.payload.id){
                if(action.payload.type === "increment"){
                    // console.log("เพิ่ม quantity ของ",action.payload.id);
                    return{
                        ...item,
                        quantity:item.quantity<5 ? item.quantity+1 : item.quantity
                    }
                }
                if(action.payload.type === "decrement"){
                    // console.log("ลด quantity ของ",action.payload.id);
                    return{
                        ...item,
                        quantity:item.quantity-1
                    }
                }
            }
            return item
        }).filter((item)=>item.quantity !==0)
        console.log(newCart)
        return{
            ...state,cart:newCart
        }
    }
    
    if(action.type === "CALCULATE_TOTAL"){
        
        const {total,amount} = state.cart.reduce((cartTotal,item)=>{
            const {price,quantity} = item //console.log(item.price, item.quantity)
            const itemTotal = price * quantity
            cartTotal.total += itemTotal
            cartTotal.amount += quantity
            return cartTotal
            //console.log(`ยอดรวมสินค้าไอดีที่ ${item.id} = ${itemTotal}`)
            // console.log(cartTotal)
        },
        {
            total:0,
            amount:0
        })
        return{
            //xx:yy ตัวหลังจาก {total,amount}
            ...state,total:total,amount:amount
        }
    }
}

//[1,2,3]
// id = 2 => [1,3] => cart
export default reducer