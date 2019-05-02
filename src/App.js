import React from 'react';
import './App.css';





function App() {  
  constructor(props) {
    super(props);
    this.state = {
    rolls: [],
    rollSum: null,
  } 
}

  Roll20 = () => {
    let rolls = [];
    let rollSum = 1;
    for (let i = 0; i < 20; i++) {
      rolls[i] = Math.floor(Math.random() * 20) + 1;
      rollSum += rolls[i];
    }
    this.setState({
       rolls,
        rollSum})


    // Math.random()*(20-1) + 1;
    // return display.getElementById(results)
  } 

  return (
    <div className="App">
 <header><h1>Dungeons and Dragons!</h1></header>
 <nav>
   <button onClick={this.Roll20}>D20</button>
   <button>D12</button>
   <button>D10</button>
   <button>D10%</button>
   <button>D8</button>
   <button>D6</button>
   <button>D4</button>
   </nav> 
   
     <section>
  {[1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(number => {
    return (
      <button
        key={number}
        onClick={() => this.diceRoll(number)}

      >
        {this.props.number}
        </button>
    );
  })}
     </section>
    </div>
  );
}

export default App;
