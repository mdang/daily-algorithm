import React, { Component } from 'react';

import './Task.css';

import * as constants from '../constants';

class Task extends Component {
  render() {
    return (
      <div id={ this.props.task.id } className="col-md-3 col-sm-6 col-xs-12 task">
        <div className="card">
          <div className="card-top" style={{ backgroundColor: this.props.task.backgroundColor }}></div>
          <div className="card-body">
            {
              (this.props.task.id !== constants.SLEEP_ID) ?
                <div className="card-remove">
                  <a onClick={ this.props.handleTaskDelete.bind(null, this.props.task) }> <i className="fa fa-times" aria-hidden="true"></i></a>
                </div> :
                ''
            }

            <div className="md-form">
              <input
                type="text"
                name="name"
                className="form-control"
                value={ this.props.task.name }
                onChange={ this.props.handleTaskChange.bind(null, this.props.task) } />
              <label htmlFor="task">Task</label>
            </div>

            <div className="md-form">
              <i className="fa fa-clock-o prefix grey-text"></i>
              <input
                type="number"
                name="current"
                min="0"
                max="1440"
                className="form-control"
                value={ this.props.task.current }
                onChange={ this.props.handleTaskChange.bind(null, this.props.task) } />
              <label htmlFor="current">Current time <span>(minutes)</span></label>
            </div>

            <div className="md-form">
              <i className="fa fa-clock-o prefix grey-text"></i>
              <input
                type="number"
                name="ideal"
                min="0"
                max="1440"
                className="form-control"
                value={ this.props.task.ideal }
                onChange={ this.props.handleTaskChange.bind(null, this.props.task) } />
              <label htmlFor="ideal">Ideal time <span>(minutes)</span></label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Task;
