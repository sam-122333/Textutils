import "./App.css";
import { Navbar } from "./Navbar";
import TextForm from "./TextForm";
import React, { useState } from "react";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [changeTextMode, setChangeTextMode] = useState("Enable Text Mode");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = ()=>{
    console.log("toggle happened");
    if (mode === "dark") {
      setMode("light");  
      setChangeTextMode("Enable Dark Mode"); 
      showAlert("Dark Mode Enabled","Success!");
    }
    else{
      setMode("dark");   
      setChangeTextMode("Disable Dark Mode");
      showAlert("Light Mode Enabled","Success!");

    }
    console.log(mode);
    document.body.style.backgroundColor = mode === "light" ? "#1d304c":"white"; 
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" toggleMode = {toggleMode} mode = {mode} changeTextMode ={changeTextMode}/>
        <Alert alertMsg={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                textArea="Enter Text To Analyze"
                showAlert={showAlert}
                mode = {mode}

              />
            }
          />
          <Route
            path="/textForm"
            element={
              <TextForm
                textArea="Enter Text To Analyze"
                showAlert={showAlert}
                mode = {mode}
              />
            }
          />
          <Route path="/about" element={<About mode = {mode} />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;