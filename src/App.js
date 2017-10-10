import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Report from './components/Report';
import Tasks from './components/Tasks';

class App extends Component {
  handleTaskChange(e) {
    console.log('Task changed:', e);
  }

  render() {
    const tasks = [
      {
        name: 'One',
        current: 23,
        ideal: 12
      },
      {
        name: 'Two',
        current: 13,
        ideal: 2
      },
      {
        name: 'Three',
        current: 54,
        ideal: 33
      },
      {
        name: 'Four',
        current: 78,
        ideal: 10
      },
      {
        name: 'Five',
        current: 55,
        ideal: 6
      }
    ];

    return (
      <div className="app container-fluid">
        <NavBar />

        <main className="container-fluid">
          <Report tasks={ tasks } />
          <Tasks tasks={ tasks } handleTaskChange={ this.handleTaskChange } />
        </main>
      </div>
    );
  }
}

export default App;
