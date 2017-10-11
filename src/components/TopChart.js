import React, { Component } from 'react';
import './TopChart.css';

import { Bar } from 'react-chartjs-2';

import * as constants from '../constants';

class TopChart extends Component {
  render() {
    const tasks = this.props.tasks.slice(0);
    const sortedTasks = tasks.map(task => {
      task.diff = parseInt(task.ideal, 10) - parseInt(task.current, 10);
      return task;
    });

    sortedTasks.sort((a, b) => {
      if (a.diff < b.diff) {
        return -1;
      } else if (a.diff > b.diff) {
        return 1;
      } else {
        return 0;
      }
    });

    const topTasks = sortedTasks.splice(0, 3);
    const labels = topTasks.map(task => {
      return task.name;
    });

    const currentData = topTasks.map(task => {
      return task.current;
    });

    const idealData = topTasks.map(task => {
      return task.ideal;
    });

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Current',
          backgroundColor: '#FFCE56',
          borderColor: 'rgba(255,255,255,1)',
          borderWidth: 1,
          hoverBackgroundColor: constants.DEFAULT_HOVER_BACKGROUND_COLOR,
          hoverBorderColor: constants.DEFAULT_HOVER_BORDER_COLOR,
          data: currentData
        },
        {
          label: 'Optimized',
          backgroundColor: 'rgba(79,195,247,1)',
          borderColor: 'rgba(255,255,255,1)',
          borderWidth: 1,
          hoverBackgroundColor: constants.DEFAULT_HOVER_BACKGROUND_COLOR,
          hoverBorderColor: constants.DEFAULT_HOVER_BORDER_COLOR,
          data: idealData
        }
      ]
    };

    return (
      <section className="col-md-4 col-sm-6 col-xs-12">
        <div className="card z-depth-1-half">
          <nav className="navbar navbar-dark deep-orange lighten-1">
            Top Time Wasters
          </nav>
          <div className="card-chart">
            <Bar
              data={ data }
              options={{
                maintainAspectRatio: true
              }} />
          </div>
          <div className="card-body">
            <p className="card-text text-center">Where you stand to regain most of your time.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default TopChart;
