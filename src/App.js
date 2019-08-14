import React from "react";
import MainTime from "./mainTimer.js";
import "./App.css";
import "./bootstrap.min.css";


function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className=" d-flex flex-row">
        <MainTime/>
      </div>
    </div>
  );
}

export default App;
