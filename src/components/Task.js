import React, { Component } from 'react';
import './Task.css';

import * as constants from '../constants';

class Task extends Component {
  render() {
    return (
      <div id={ this.props.id } className="col-md-3 col-sm-6 col-xs-12 task">
        <div className="card">
          <div className="card-top" style={{ backgroundColor: this.props.backgroundColor, padding: '.2em' }}>

          </div>
          <div className="card-body">
            {
              (this.props.id !== constants.SLEEP_ID) ?
                <div className="card-remove">
                  <a href="/"> <i className="fa fa-times" aria-hidden="true"></i></a>
                </div> :
                ''
            }

            <div className="md-form">
              <input
                type="text"
                name="task"
                className="form-control"
                value={ this.props.name }
                onChange={ this.props.handleTaskChange } />
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
                value={ this.props.current }
                onChange={ this.props.handleTaskChange } />
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
                value={ this.props.ideal }
                onChange={ this.props.handleTaskChange } />
              <label htmlFor="ideal">Ideal time <span>(minutes)</span></label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Task;
