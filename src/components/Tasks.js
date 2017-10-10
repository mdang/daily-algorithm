import React, { Component } from 'react';
import './Tasks.css';

import Task from './Task';

class Tasks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tasks = this.props.tasks.map(task => {
      return <Task
                name={ task.name }
                current={ task.current }
                ideal={ task.ideal } />
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
