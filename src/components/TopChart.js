import React, { Component } from 'react';
import './TopChart.css';

import { Bar } from 'react-chartjs-2';

class TopChart extends Component {
  render() {
    const tasks = this.props.tasks.slice(0);
    const sortedTasks = tasks.map(task => {
      task.diff = task.ideal - task.current;
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

    console.log('sortedTasks', sortedTasks);

    const topTasks = sortedTasks.splice(0, 3);
    console.log('topTasks', topTasks);

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
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,255,255,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: currentData
        },
        {
          label: 'Optimized',
          backgroundColor: 'rgb(79,195,247)',
          borderColor: 'rgba(255,255,255,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
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
