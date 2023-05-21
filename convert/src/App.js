import money from './img/money.png'
import './App.css';
import Currency from './components/Currency';
import { useEffect, useState } from 'react'

function App() {

  const [currencyChoice, setCurrencyChoice] = useState([])

  const [fromCurrency,setFromCurrency] = useState("USD")
  const [toCurrency,setToCurrency] = useState("THB")

  //จำนวนเงินที่ป้อน
  const [amount,setAmount] = useState(1)
  //อัตราการแลกเปลี่ยน
  const [exchangeRate,setExchangeRate] = useState(0)

  const [checkFromCurrency,setCheckFromCurrency] = useState(true)

  let fromAmount,toAmount

  if (checkFromCurrency) {
    fromAmount = amount
    toAmount = (amount*exchangeRate).toFixed(2)
  }else{
    toAmount = amount
    fromAmount = (amount/exchangeRate).toFixed(2)
  }

  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    fetch(url)
    .then(res=>res.json())
    //.then(data=>console.log(data.rates[toCurrency]))
    //ทำให้ object เป็น array
    
    .then(data=>{
      setCurrencyChoice([...Object.keys(data.rates)])
      setExchangeRate(data.rates[toCurrency])
    })
    // เพื่อที่ fetch สกุลเงินแค่ครั้งเดียว ในตอนrender ตัวแอพ component
    // เกิดการทำงานก็ต่อเมื่อ มีการเปลี่ยนแปลงค่าใน fromCurrency ด้วย
  }, [fromCurrency,toCurrency])

  const amountFromCurrency=(e)=>{
    setAmount(e.target.value)
    setCheckFromCurrency(true)
  }

  const amountToCurrency=(e)=>{
    setAmount(e.target.value)
    setCheckFromCurrency(false)
  }
  
  return (
    <div className="App">
      <img alt='logo money' src={money} className='money-img'></img>
      <h1>แอพแปลงสกุลเงิน (API)</h1>
      <div className='container'>
        <Currency currencyChoice={currencyChoice} 
          selectCurrency={fromCurrency}
          //จะเปลี่ยนแปลงค่าที่อยู่ใน (fromCurrency,toCurrency) เปลี่ยนแปลงสกุลเงินใน state นี้
          changeCurrency={(e)=>setFromCurrency(e.target.value)}
          amount = {fromAmount}
          onChangeAmount = {amountFromCurrency}
          />

        <div className='equal'>=</div>


        <Currency currencyChoice={currencyChoice}
          selectCurrency={toCurrency}
          changeCurrency={(e)=>setToCurrency(e.target.value)}
          amount = {toAmount}
          onChangeAmount = {amountToCurrency}
          />

      </div>
    </div>
  );
}

export default App;
