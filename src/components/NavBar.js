import React, { Component } from 'react';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="heading navbar navbar-dark deep-orange darken-2">
        <h1 className="navbar-brand">Daily Algorithm</h1>
        <div className="nav-item">
          <a className="nav-link" href="https://github.com/mdang/daily-algorithm"><i className="fa fa-github fa-lg"></i></a>
        </div>
      </nav>
    )
  }
}

export default NavBar;
