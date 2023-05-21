import './App.css';
import FoodComponent from './components/FoodComponent';
import {useEffect, useState} from 'react'
import MenuData from './data/MenuData';

function App() {
  const [foodData, setFoodData] = useState(MenuData)
  const [dataInPage,setDataInPage] = useState([])
  const [page,setPage] = useState(0)

  //ข้อมูลทั้งหมด 10 รายการ
  //จำนวนข้อมูลแต่ละหน้า

  //10 / 5 = จำนวนเลขหน้า

  //จำนวนเลขหน้า = ข้อมูลทั้งหมด - จำนวนรายการเลขหน้า

  const pagination=()=>{
    const foodPerPage = 3 // 3 item per page
    const pages = Math.ceil(MenuData.length / foodPerPage) //number of pages

    console.log(MenuData.length) //number all items
    console.log("amount pages",pages) //pages=5

    const newFood = Array.from({length:pages},(data,index)=>{
      const start = index * foodPerPage //index [0] => 1 , index [3] => 4
      //(0,0+3)=> [0] [1] [2] [3]
      return MenuData.slice(start,start+foodPerPage)
    })
    return(newFood)
  }

  const handlePage=(index)=>{
    setPage(index)
  }

  useEffect(()=>{
    const paginate = pagination()
    setDataInPage(paginate) //create number of page
    
    setFoodData(paginate[page])
  },[page])
  

  return (
    <div className="App">
      <h1>FoodCard | Pagination</h1>
      <div className='container'>
        {foodData.map((data,index)=>{
          return <FoodComponent key={index} {...data}/>
        })}
      </div>
      <div className='pagination-container'>
        {dataInPage.map((data,index)=>{
          return(//check index == page yet? yes=>"active-btn" no=>null
            <button className={`page-btn ${index===page ? "active-btn":null}`}
            key={index}
            onClick={()=>handlePage(index)}>{index+1}</button>
          )
        })}
      </div>
      
    </div>
    
  );
}

export default App;
