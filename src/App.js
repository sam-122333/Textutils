import "./App.css";
import { Navbar } from "./Navbar";
import TextForm from "./TextForm";
import React, { useState } from "react";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const [myStyle, setMyStyle] = useState({});
  const [textAreaStyle, setTextAreaStyle] = useState({});
  const [btnStyle, setBtnStyle] = useState("primary");
  const [aboutCompStyle, setAboutCompStyle] = useState({});
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removeClass = () => {
    document
      .getElementById("navbar")
      .classList.remove(
        "bg-danger",
        "bg-success",
        "bg-primary",
        "navbar-light",
        "bg-light",
        "bg-dark",
        "navbar-dark"
      );
  };
  const themeChanger = (cls) => {
    switch (cls) {
      case "light":
        removeClass();
        document
          .getElementById("navbar")
          .classList.add("bg-light", "navbar-light");
        document.body.style.backgroundColor = "white";
        setMyStyle({
          color: "black",
        });
        setTextAreaStyle({ backgroundColor: "white", color: "black" });
        setBtnStyle("primary");
        setAboutCompStyle({ color: "black", backgroundColor: "white" });
        showAlert("Light theme enabled", "success!");
        break;
      case "dark":
        removeClass();
        document
          .getElementById("navbar")
          .classList.add("bg-dark", "navbar-dark");
        document.body.style.backgroundColor = "#1d304c";
        setMyStyle({
          color: "white",
        });
        setTextAreaStyle({ backgroundColor: "black", color: "white" });
        setBtnStyle("dark");
        setAboutCompStyle({ color: "white", backgroundColor: "#1d304c" });
        showAlert("Dark theme enabled", "success!");
        break;
      case "primary":
        removeClass();
        document
          .getElementById("navbar")
          .classList.add("bg-primary", "navbar-dark");
        document.body.style.backgroundColor = "#14aff1";
        setMyStyle({
          color: "white",
        });
        setTextAreaStyle({ backgroundColor: "#cee3ff", color: "black" });
        setBtnStyle("primary");
        setAboutCompStyle({ color: "white", backgroundColor: "#14aff1" });
        showAlert("Blue theme enabled", "success!");
        break;
      case "danger":
        removeClass();
        document
          .getElementById("navbar")
          .classList.add("bg-danger", "navbar-dark");
        document.body.style.backgroundColor = "rgb(255 155 165)";
        setMyStyle({
          color: "white",
        });
        setTextAreaStyle({
          backgroundColor: "rgb(255 228 230)",
          color: "black",
        });
        setBtnStyle("danger");
        setAboutCompStyle({
          color: "white",
          backgroundColor: "rgb(255 155 165)",
        });
        showAlert("Red theme enabled", "success!");

        break;
      case "success":
        removeClass();
        document
          .getElementById("navbar")
          .classList.add("bg-success", "navbar-dark");
        document.body.style.backgroundColor = "#84ffc6";
        setMyStyle({
          color: "white",
        });
        setTextAreaStyle({ backgroundColor: "#c7ffe5", color: "black" });
        setBtnStyle("success");
        setAboutCompStyle({ color: "white", backgroundColor: "#84ffc6" });
        showAlert("Green theme enabled", "success!");

        break;
      default:
        break;
    }
  };
  return (
    <>
      <Router>
        <Navbar theme={themeChanger} title="TextUtils" />
        <Alert alertMsg={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                textArea="Enter Text To Analyze"
                showAlert={showAlert}
                style={myStyle}
                textStyle={textAreaStyle}
                btn={btnStyle}
              />
            }
          />
          <Route
            path="/textForm"
            element={
              <TextForm
                textArea="Enter Text To Analyze"
                showAlert={showAlert}
                style={myStyle}
                textStyle={textAreaStyle}
                btn={btnStyle}
              />
            }
          />
          <Route path="/about" element={<About compStyle={aboutCompStyle} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
