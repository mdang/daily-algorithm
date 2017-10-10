import React, { Component } from 'react';
import './Tasks.css';

import Task from './Task';

class Tasks extends Component {
  render() {
    const tasks = this.props.tasks.map(task => {
      return <Task
                key={ task.name }
                name={ task.name }
                current={ task.current }
                ideal={ task.ideal }
                handleTaskChange={ this.props.handleTaskChange } />
    })

    return (
      <article>
        <div className="text-center">
          <button className="btn btn-default">Add Daily Task</button>
        </div>

        <section className="tasks row">
          { tasks }
        </section>
      </article>
    )
  }
}

export default Tasks;
