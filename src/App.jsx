import React from 'react';
import DropDowns from './components/DropDowns';
import Weather from './components/Weather';
import MyContext from './context/MyContext';
import { useContext } from 'react'
import './App.css';


const App = () => {

  const {citySelect} = useContext(MyContext)
  return (
    <main>
    <DropDowns />
   

    {citySelect && <Weather />}
    </main>
  );
}

export default App;

