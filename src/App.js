import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Report from './components/Report';
import Tasks from './components/Tasks';

class App extends Component {
  render() {
    return (
      <div className="app container-fluid">
        <NavBar />

        <main className="container-fluid">
          <Report />
          <Tasks />
        </main>
      </div>
    );
  }
}

export default App;
