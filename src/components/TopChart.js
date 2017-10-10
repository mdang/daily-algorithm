import React, { Component } from 'react';
import './TopChart.css';

import { Bar } from 'react-chartjs-2';

class TopChart extends Component {
  render() {
    const barData = {
      labels: ['Sleep', 'Watching TV', 'Shower'],
      datasets: [
        {
          label: 'Current',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,255,255,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80]
        },
        {
          label: 'Optimized',
          backgroundColor: 'rgb(79,195,247)',
          borderColor: 'rgba(255,255,255,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [33, 24, 17]
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
              data={barData}
              options={{
                width: '50%',
                maintainAspectRatio: true
              }}
            />

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
