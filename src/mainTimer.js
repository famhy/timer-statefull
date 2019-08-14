import React from "react";
import Time from "./Timer.js";
import "./App.css";
import "./bootstrap.min.css";

var isStop = true;
var timeSec = 0;
var isReset= false;
class MainTimer extends React.Component {
  handleClick(e) {
    isStop = !isStop;
    if (!isStop) {
      document.getElementById("start").innerHTML = "Stop";
    } else {
      document.getElementById("start").innerHTML = "Start";
    }
  }

  reset() {
    timeSec = 0;
    isStop = true;
    document.getElementById("start").innerHTML = "Start";
    isReset = true;
  }
  constructor(props) {
    super(props);

    this.state = {
      seconde: "00",
      minute: "00",
      hour: "00",
     
    };
    setInterval(() => {
      if (!isStop) {
        timeSec++;
        this.setState({
          hour: parseInt(timeSec / 3600)
            .toString()
            .padStart(2, "0"),
          minute: parseInt((timeSec % 3600) / 60)
            .toString()
            .padStart(2, "0"),
          seconde: ((timeSec % 3600) % 60).toString().padStart(2, "0")
        });
      }
      if (isReset) {
        this.setState({
          seconde: "00",
          minute: "00",
          hour: "00",
          
        });
        isReset=false
      }
      console.log(timeSec, isStop);
    }, 1000);
  }
  render() {
    return (
      <div className="App d-flex justify-content-center flex-column">
        <div className=" d-flex flex-row">
          <div className="Time d-flex flex-column">
            <p className="time-section">{this.state.hour}</p>
            <p className="time-name">Hour</p>
          </div>

          <div className="Time d-flex flex-column">
            <p className="time-section">{this.state.minute}</p>
            <p className="time-name">Minute</p>
          </div>
          <div className="Time d-flex flex-column">
            <p className="time-section">{this.state.seconde}</p>
            <p className="time-name">Second</p>
          </div>
        </div>
        <div className="button-secction">
        <button className="button" id="start" onClick={this.handleClick}>
          Start
        </button>
        <button className="button" id="Reset" onClick={this.reset}>
          Reset
        </button>
        </div>
        
      </div>
    );
  }
}

export default MainTimer;
