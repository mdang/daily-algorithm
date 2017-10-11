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

  handleTaskChange(task, e) {
    const tasks = this.state.tasks.map(prevTask => {
      if (prevTask.id === task.id) {
        prevTask[e.target.name] = e.target.value;
      }

      return prevTask;
    })

    this.setState({
      tasks: tasks
    })
  }

  handleTaskAdd(e) {
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

  handleTaskDelete(task, e) {
    const tasks = this.state.tasks.filter(prevTask => {
      return prevTask.id !== task.id;
    });

    this.setState({
      tasks: tasks
    });
  }

  render() {
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
