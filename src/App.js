import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Sam', age: 20 },
      { name: 'Dave', age: 34 },
      { name: 'Bob', age: 28 } 
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Samuel';
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'Dave', age: 34 },
        { name: 'Bob', age: 32 } 
      ] 
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Sam', age: 20 },
        { name: event.target.value, age: 34 },
        { name: 'Bob', age: 32 } 
      ] 
    });
  };
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          onClick={() => this.switchNameHandler("Samuel!!")}
          style={style}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Sam!')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
