import React, { Component } from 'react';
import './App.css';




class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: undefined,
      currentRoll:[],
    } 
  }


    
  //  Roll20 = () => {
  //    let numbers = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
  //    let roll = [];
  //     Math.floor(Math.random(numbers)); 
  //         roll.push({
  //           number: numbers
  //         });
  //     };


    setNumber = () => {
      this.setState({
        currentNumber: Math.ceil(Math.random() *  20)
      }, () => {
        console.log(this.state.currentNumber)
      })
    }

   render() {
  return (
    <div className="App">
 <header><h1>Dungeons and Dragons!</h1></header>
 <nav>
   <button onClick={this.setNumber}>D20</button>
   {/* <span>{this.props.roll}</span> */}
   <span>{this.state.currentNumber}</span>
   <button>D12</button>
   <button>D10</button>
   <button>D10%</button>
   <button>D8</button>
   <button>D6</button>
   <button>D4</button>
   </nav> 
   

    </div>
  );
}
};

export default App;
