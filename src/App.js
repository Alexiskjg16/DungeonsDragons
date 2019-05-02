import React from 'react';
import './App.css';





class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
    roll:[],
  } 
  this.Roll20 = this.Roll20.bind(this)
}


    
   Roll20 = () => {
     let numbers = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
     let roll = [];
        for (let numberIndex = 0; numberIndex < numbers.length; numberIndex++) {
          roll.push({
            number: numbers[numberIndex]
          });
      }
    };
   
   RandomRoll = () => {
   Math.floor(Math.random(numbers));
   
   }
   
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
      <button  onClick={() => this.diceRoll(number)}>
        {this.props.number}
        </button>
     </section>
    </div>
  );
}

export default App;
