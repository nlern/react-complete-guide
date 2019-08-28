import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Hari', age: 25 },
      { name: 'Ram', age: 27 },
      { name: 'Gopal', age: 26 },
    ],
    otherState: 'some other state'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Ramu', age: 27 },
        { name: 'Gopal', age: 23 },
      ]
    })
  }

  render() {
    const personsList = this.state.persons.map(person =>
      <Person key={person.name + person.age} name={person.name} age={person.age} click={this.switchNameHandler.bind(this, person.age)} />
    );
    return (
      <div className="App">
        <h1>Hi, I'm a React App!!!</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Shaan')}>Switch Name</button>
        {personsList}
      </div>
    );
  }
}

export default App;
