import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      name: {firstName: 'João', lastName: 'Gomide'},
      company: 'Acelera XYZ'
    };
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName} {this.state.name.lastName}, I work in {this.state.company}</p>
          <button onClick={() => { this.setState({name: {firstName: 'Jv', lastName: 'Tralha'}})}}>Change name!</button>
        </header>
      </div>
    );
  }
  
}

export default App;
