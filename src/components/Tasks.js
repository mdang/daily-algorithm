import React, { Component } from 'react';
import './Tasks.css';

import Task from './Task';

class Tasks extends Component {
  render() {
    return (
      <article>
        <div className="text-center">
          <button className="btn btn-default">Add Daily Task</button>
        </div>

        <section className="tasks row">

          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />

        </section>
      </article>
    )
  }
}

export default Tasks;
