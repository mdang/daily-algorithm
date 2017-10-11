import React, { Component } from 'react';
import './CurrentChart.css';

import { Pie } from 'react-chartjs-2';

import { dynamicColor, calculateFreeTime } from '../helpers/functions';
import * as constants from '../constants';

class CurrentChart extends Component {
  render() {
    const tasks = this.props.tasks.filter(task => {
      return (task.current > 0);
    });

    const freeTime = calculateFreeTime(tasks);
    freeTime.name = constants.FREE_TIME_LABEL;
    freeTime.backgroundColor = constants.FREE_TIME_BACKGROUND_COLOR;

    tasks.push(freeTime);

    const labels = tasks.map(task => {
      return task.name
    });

    const data = tasks.map(task => {
      return (task.current ? task.current : 0);
    });

    const colors = tasks.map(task => {
      return task.backgroundColor ?
                task.backgroundColor :
                dynamicColor();
    });

    const pieData = {
    	labels: labels,
    	datasets: [{
    		data: data,
    		backgroundColor: colors,
    		hoverBackgroundColor: constants.DEFAULT_HOVER_BACKGROUND_COLOR,
        hoverBorderColor: constants.DEFAULT_HOVER_BORDER_COLOR
    	}]
    }

    return (
      <section className="col-md-4 col-sm-6 col-xs-12">
        <div className="card z-depth-1-half">
          <nav className="navbar navbar-dark deep-orange lighten-1">
            Current Time Usage
          </nav>
          <div className="card-chart">
            <Pie data={ pieData } />
          </div>
          <div className="card-body">
            <p className="card-text text-center">What an average day for you looks like now.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default CurrentChart;
