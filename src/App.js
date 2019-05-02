import React, { Component } from 'react';
import './App.css';




class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      currentIcosagon: undefined,
      currentDodecagon: undefined,
      currentDecagon: undefined,
      currentHectogon: undefined,
      currentOctogon: undefined,
      currentHexagon: undefined,
      currentQuadrilateral: undefined
    } 
  }

    setIcosagon = () => {
      this.setState({
        currentIcosagon: Math.ceil(Math.random() *  20)
      }, () => {
        console.log('D20:' + this.state.currentIcosagon)
      })
    }

    setDodecagon = () => {
      this.setState({
        currentDodecagon: Math.ceil(Math.random() *  12)
      }, () => {
        console.log('D12:' + this.state.currentDodecagon)
      })
    }


    setDecagon = () => {
      this.setState({
        currentDecagon: Math.ceil(Math.random() *  10)
      }, () => {
        console.log('D10:' + this.state.currentDecagon)
      })
    }


    setHectogon = () => {
      this.setState({
        currentHectogon: Math.ceil(Math.random() *  100)
      }, () => {
        console.log('D100:' + this.state.currentHectogon)
      })
    }


    setOctogon = () => {
      this.setState({
        currentOctogon: Math.ceil(Math.random() *  8)
      }, () => {
        console.log('D8:' + this.state.currentOctogon)
      })
    }


    setHexagon = () => {
      this.setState({
        currentHexagon: Math.ceil(Math.random() *  6)
      }, () => {
        console.log('D6:' + this.state.currentHexagon)
      })
    }


    setQuadrilateral = () => {
      this.setState({
        currentQuadrilateral: Math.ceil(Math.random() *  4)
      }, () => {
        console.log('D4:'+ this.state.currentQuadrilateral)
      })
    }


   render() {
  return (
    <div className="App">
 <header><h1>Dungeons and Dragons!</h1></header>
 <nav>
   <button onClick={this.setIcosagon}>D20</button>
   <span>{this.state.currentIcosagon}</span>
   <button onClick={this.setDodecagon}>D12</button>
   <span>{this.state.currentDodecagon}</span>
   <button onClick={this.setDecagon}>D10</button>
   <span>{this.state.currentDecagon}</span>
   <button onClick={this.setHectogon}>D100</button>
   <span>{this.state.currentHectogon}</span>
   <button onClick={this.setOctogon}>D8</button>
   <span>{this.state.currentOctogon}</span>
   <button onClick={this.setHexagon}>D6</button>
   <span>{this.state.currentHexagon}</span>
   <button onClick={this.setQuadrilateral}>D4</button>
   <span>{this.state.currentQuadrilateral}</span>
   </nav> 
   

    </div>
  );
}
};

export default App;
