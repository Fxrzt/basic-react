import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './components/page/Home'
import Member from "./components/page/Member"
import Product from './components/page/Product'
import Status from './components/page/Status'

import './App.css'

// React@6 Routes instead of Switch

function App() {
  return (
      <div>
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/member" element={<Member/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/status" element={<Status/>}/>
            </Routes>
        </Router>
      </div>
    
  );
}

export default App;
