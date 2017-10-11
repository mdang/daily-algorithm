import React, { Component } from 'react';
import './Tasks.css';

import Task from './Task';

class Tasks extends Component {
  render() {
    const tasks = this.props.tasks.map(task => {
      return <Task
                key={ task.id }
                task={ task }
                { ...this.props } />
    })

    return (
      <article>
        <div className="text-center">
          <button
            onClick={ this.props.handleTaskAdd }
            className="btn btn-default">Add Daily Task</button>
        </div>

        <section className="tasks row">
          { tasks }
        </section>
      </article>
    )
  }
}

export default Tasks;
