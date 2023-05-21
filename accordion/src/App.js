import data from './data';
import './App.css';
import {useState} from "react"
import SingleContent from './components/SingleContent';

function App() {
  
  console.log(data)
  const [content,setContent] = useState(data)

  
  return (
    <main>
        <div className="container">
          <h3>เครื่องมือพัฒนาเว็บ ปี2021</h3>
          <section>
            {content.map((data)=>{
              return <SingleContent key={data.id} {...data}/>
            })}
          </section>
        </div>
    </main>
    
  );
}

export default App;
