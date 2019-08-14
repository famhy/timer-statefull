import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";

class Time  extends React.Component{
  constructor(props) {
   
    super(props)
    console.log(props.timeSec)
    this.state = {
      second : 0,
      minute : 0,
      hour : 0,
      timeSec:props.timeSec,
      
    };
    setInterval( () =>
    {
      

      this.setState({
        hour :parseInt(this.state.timeSec / 3600).toString().padStart(2, '0'),
        minute :parseInt((this.state.timeSec % 3600) / 60).toString().padStart(2, '0'),
        seconde : ((this.state.timeSec % 3600) % 60).toString().padStart(2, '0')
        
      })
      console.log(this.state.hour,":",this.state.minute,":",this.state.seconde)
    }
    ,
    1000
     
      )
  }
  
     
        render(){
          return (
            <div className="Time d-flex flex-column">
              <p className="time-section">
                {this.props.Name === "Hour"
                  ? this.state.hour
                  : this.props.Name === "Minute"
                  ? this.state.minute
                  : this.state.seconde
                  }
              </p>
              <p className="time-name">{this.props.Name}</p>
            </div>
          );}

        
}


export default Time;
