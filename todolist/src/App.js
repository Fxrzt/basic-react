import './App.css';
import {useState} from "react"
import {v4 as uuidv4} from 'uuid';
import List from './components/List';

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([])

  const submitData=(e)=>{
    e.preventDefault()
    console.log("ข้อมูลรายการ = ",name)
    const newItem = {
      id:uuidv4(),
      title:name
    }
    // console.log(newItem)
    //เพิ่มข้อมูลใหม่ไปต่อท้าย state list ใน ...array
    //array [list] นั้นเป็น array เปล่า ...list=>{}
    //เอาnewItem ไปต่อท้าย => [list]=> {id:"1",title:"first"},{id:"2",title:"second"}
    setList([newItem,...list])
    setName("")
  }

  return (
    <section className="container">
        <h1>Todolist App</h1>
        <form className="form-group" onSubmit={submitData}>
          <div className="form-control">
            <input type="text" className="text-input"
              onChange={(e)=>setName(e.target.value)}
              value={name}>
            </input>
            <button type="submit" className="submit-btn">เพิ่มข้อมูล</button>
          </div>
        </form>

        <section className='list-container'>
          {list.map((data,index)=>{
            //id=data.id
            return <List key={index} {...data} />
          })}
        </section>

    </section>
  );
}

export default App;
