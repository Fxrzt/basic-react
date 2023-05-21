import {createContext, useState} from 'react'
import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import Score from './components/Score';

export const DataContext = createContext()
//context api is?? -> https://medium.com/@pakpoom.thawee/%E0%B8%A1%E0%B8%B2%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81-react-context-api-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-511d1bd332f1
//^^shorturl.at/qtvBS

function App() {
  const [appState, setAppState] = useState('menu')
  const [score,setScore] = useState(0)
  return (
    <DataContext.Provider value={{appState,setAppState,score,setScore}}>
      <div className="App">
        <h1>Wev Deverlopment Quiz</h1>
        {appState === 'menu' && <Menu/>}
        {appState === 'quiz' && <Quiz/>}
        {appState === 'score' && <Score/>}
      </div>
    </DataContext.Provider>
  )
}

export default App;
