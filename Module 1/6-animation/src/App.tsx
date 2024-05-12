import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  ///Chek app.css file
  return (
    <>
      <div className="main">
        <div className="box-1"></div>
        <div className="box-2"></div>
        {/* <h1>Something</h1> */}
      </div>

      <div className="btn-container">
        <button className="btn">Hover me</button>
      </div>
    </>
  );
}

export default App;
