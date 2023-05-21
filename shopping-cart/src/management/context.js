//create context api => ให้บริการข้อมูลแก่ component ใน app
import {createContext,useContext,useReducer,useEffect} from 'react'
import CartData from './../data/CartData'
import reducer from './reducer'

const initState={
    cart:CartData,
    total:0,
    amount:0
}
const CartContext = createContext()

export const MyCartContext=()=>{
    return useContext(CartContext)
}

//CartProvider ทำหน้าที่กระจายหรือแชร์ข้อมูลไปยัง component อื่นๆ ที่อยู่ในแอพฯเรา
const CartProvider =({children})=>{
    //dispatch ส่งผลอะไรให้ข้อมูลเปลี่ยนแปลงไปก็จะสั่ง dispatch
    
    const [state,dispatch] = useReducer(reducer,initState)

    useEffect(()=>{
        dispatch({type:"CALCULATE_TOTAL"})
    },[state.cart])

    const removeItem=(id)=>{
        console.log("รหัสที่ต้องการลบ = ",id)
        dispatch({type:"REMOVE_ITEM",payload:id})
    }

    //ใส่ลูกน้ำ
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const toggleQuantity=(id,type)=>{
        dispatch({type:"TOGGLE_QUANTITY",payload:{id,type}})
        // if(type==="increment"){
        //     console.log("เพิ่มปริมาณสินค้า = ",id)
        // }else{
        //     console.log("ลดปริมาณสินค้า = ",id)
        // }
    }

    return(
        <CartContext.Provider value={{...state,removeItem,toggleQuantity,formatNumber}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}