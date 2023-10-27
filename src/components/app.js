import Navbar from './components/Navbar';
import Text from './components/Text';
import './App.css';
import React, {useState} from 'react'
function App() {
  const[mode, setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.background ='white';
    }
    else
    {
      setMode('dark');
      document.body.style.background ='#10284b';
    }
  }
  return (
    <>
    <Navbar title="Navbar" action="about" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <Text/>
    </div>
    </>
  );
}
export default App;