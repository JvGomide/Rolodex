import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '1abc'
        },
        {
          name: 'Frank',
          id: '1bcd'
        },
        {
          name: 'Jack',
          id: '1cde'
        },
        {
          name: 'Andrei',
          id: '1def'
        }
      ]
    };
  }

  render(){
    return (
      <div className="App">
        { this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
  
}

export default App;
