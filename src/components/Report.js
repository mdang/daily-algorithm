import React, { Component } from 'react';
import './Report.css';

import CurrentChart from './CurrentChart';
import OptimizedChart from './OptimizedChart';
import TopChart from './TopChart';

class Report extends Component {
  render() {
    return (
      <article className="row">

        <CurrentChart />
        <OptimizedChart />
        <TopChart />

      </article>
    )
  }
}

export default Report;
