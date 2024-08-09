// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
      // document.title ='MyApp - LightMode';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been Enabled", "success");
      // document.title ='MyApp - DarkMode';
    }
  }
  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextTwist" mode={mode} toggleMode={toggleMode} about ="About Us"/>
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About  mode={mode} />}></Route>
            <Route
              exact path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
