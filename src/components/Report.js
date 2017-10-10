import React, { Component } from 'react';
import './Report.css';

import CurrentChart from './CurrentChart';
import OptimizedChart from './OptimizedChart';
import TopChart from './TopChart';

class Report extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="row">
        <CurrentChart { ...this.props } />
        <OptimizedChart { ...this.props } />
        <TopChart { ...this.props } />
      </article>
    )
  }
}

export default Report;
