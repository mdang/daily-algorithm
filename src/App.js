import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Report from './components/Report';
import Tasks from './components/Tasks';

import * as constants from './constants';
import { dynamicColor, uuidv4 } from './helpers/functions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id: constants.SLEEP_ID,
          name: constants.SLEEP_LABEL,
          current: 60 * 8,
          ideal: 60 * 8,
          backgroundColor: constants.SLEEP_BACKGROUND_COLOR
        }
      ]
    }

    this.handleTaskAdd = this.handleTaskAdd.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
  }

  handleTaskChange(e) {
    console.log('Task changed:', e);
  }

  handleTaskAdd() {
    const tasks = this.state.tasks.slice(0);

    tasks.push({
      id: uuidv4(),
      name: '',
      current: '',
      ideal: '',
      backgroundColor: dynamicColor()
    });

    this.setState({
      tasks: tasks
    });
  }

  handleTaskDelete(e) {
    console.log('Delete task', e);
    // const tasks = this.state.tasks.slice(0);

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
          <Tasks
            tasks={ this.state.tasks }
            handleTaskAdd={ this.handleTaskAdd }
            handleTaskChange={ this.handleTaskChange }
            handleTaskDelete={ this.handleTaskDelete } />
        </main>
      </div>
    );
  }
}

export default App;
