
import './App.css';
import Works from './components/Works';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import {Alert} from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route}


function App() {

  const[message, setMessage] = useState(false);

  const handlersetMessage = (status) =>{
    if(status){
      setMessage("Paslauga prideta")
    }
    
   // console.log(status);
  }
  useEffect(() => {
    setTimeout(() => {
    setMessage('');
    }, 5000);
    }, [message]);
    
  return (
    <div className="container">
    <Header></Header>
    {message && <Alert>{message}</Alert>}
    <Works status={handlersetMessage}></Works>
    </div>
  );
}

export default App;
