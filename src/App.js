import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')    //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },2000)
  }

  const toggleMode = () => {
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert('Dark Mode has been enabled', 'success')
      document.title='TextUtils - Dark Mode'
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing mode'
      // }, 2000)
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now'
      // }, 1500)
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light Mode has been enabled', 'success')
      document.title='TextUtils - Light Mode'
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="AboutUs" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} /> 
      {/* <Navbar /> */}
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
