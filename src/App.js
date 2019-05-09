import React, { Component } from 'react';
import './App.css';
import largestsided from './Pics/20sided.jpg';
import secondsided from './Pics/12sided.png';
import thirdsided from './Pics/10sideddie.png';
import fourthsided from './Pics/8sided.png';
import fivesided from './Pics/6sided.png';
import sixsided from './Pics/4sided.png';




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
 <header><h1>Roll the Dice!</h1></header>
 <nav>
  <section className="idvDice">
  <span>D20</span>
   <span onClick={this.setIcosagon}><img src={largestsided} className="diepic1" alt="D20"/></span>
   <span className="d20die">{this.state.currentIcosagon}</span>
   </section>
   <section className="idvDice">
   <span>D12</span>
   <span onClick={this.setDodecagon}><img src={secondsided} className="diepic2" alt="D12"/></span>
   <span className="d20die">{this.state.currentDodecagon}</span>
   </section>
   <section className="idvDice">
   <span>D10</span>
   <span onClick={this.setDecagon}><img src={thirdsided} className="diepic3" alt="D10"/></span>
   <span className="d20die">{this.state.currentDecagon}</span>
   </section>
   <section className="idvDice">
   <span>D100</span>
   <span onClick={this.setHectogon}><img src={thirdsided} className="diepic4" alt="D100"/></span>
   <span className="d20die">{this.state.currentHectogon}</span>
   </section>
   <section className="idvDice">
   <span>D8</span>
   <span onClick={this.setOctogon}><img src={fourthsided} className="diepic5" alt="D8"/></span>
   <span className="d20die">{this.state.currentOctogon}</span>
   </section>
   <section className="idvDice">
   <span>D6</span>
   <span onClick={this.setHexagon}><img src={fivesided} className="diepic6" alt="D6"/></span>
   <span className="d20die">{this.state.currentHexagon}</span>
   </section>
   <section className="idvDice">
   <span>D4</span>
   <span onClick={this.setQuadrilateral}><img src={sixsided} className="diepic7" alt="D4"/></span>
   <span className="d20die">{this.state.currentQuadrilateral}</span>
   </section>
   </nav> 
   

    </div>
  );
}
};

export default App;
