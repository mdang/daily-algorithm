import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Report from './components/Report';
import Tasks from './components/Tasks';

import * as constants from './constants';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          name: constants.SLEEP_LABEL,
          current: 60 * 8,
          ideal: 60 * 8,
          backgroundColor: constants.SLEEP_BACKGROUND_COLOR
        }
      ]
    }
  }

  handleTaskChange(e) {
    console.log('Task changed:', e);
  }

  render() {
    // const tasks = [
    //   // {
    //   //   name: 'Free time',
    //   //   current: 60 * 24 - (60 * 8),
    //   //   ideal: 60 * 24 - (60 * 8),
    //   //   color: '#ff6347'
    //   // },
    //   {
    //     name: 'Sleep',
    //     current: 60 * 8,
    //     ideal: 60 * 8,
    //     color: '#FFCE56'
    //   }
    // ];

    return (
      <div className="app container-fluid">
        <NavBar />

        <main className="container-fluid">
          <Report tasks={ this.state.tasks } />
          <Tasks tasks={ this.state.tasks } handleTaskChange={ this.handleTaskChange } />
        </main>
      </div>
    );
  }
}

export default App;
