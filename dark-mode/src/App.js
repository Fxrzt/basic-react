
import './App.css';
import Content from './components/Content';
import Title from './components/Title';
import { createContext } from 'react';
import { useState } from 'react';
import Footter from './components/Footter';

export const ThemeContext = createContext()

function App() {

  const [theme,setTheme] =  useState("light");

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className="App">
        <Title></Title>
        <Content></Content>
        <Footter></Footter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
