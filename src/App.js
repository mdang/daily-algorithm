import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app container-fluid">
        <nav className="navbar navbar-dark deep-orange darken-1">
          <a className="navbar-brand" href="/">Daily Algorithm</a>
        </nav>

        <main className="container-fluid">
          <section>
            <div className="card">
              <div id="card-chart-current"></div>
              <div className="card-body">
                <h4 className="card-title">Current Daily Algorithm</h4>
                <p className="card-text">Tasks that you currently do everyday</p>
                <a href="#" className="btn btn-primary">Add Daily Task</a>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="card-remove">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <form>
                  <div className="md-form">
                    <i className="fa fa-pencil-square-o prefix grey-text"></i>
                    <input type="text" name="task" className="form-control" />
                    <label for="task">Task</label>
                  </div>

                  <div className="md-form">
                    <i className="fa fa-clock-o prefix grey-text"></i>
                    <input type="number" name="minutes" className="form-control" />
                    <label for="minutes">Minutes to complete</label>
                  </div>
                </form>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="card-remove">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <form>
                  <div className="md-form">
                    <i className="fa fa-pencil-square-o prefix grey-text"></i>
                    <input type="text" name="task" className="form-control" />
                    <label for="task">Task</label>
                  </div>

                  <div className="md-form">
                    <i className="fa fa-clock-o prefix grey-text"></i>
                    <input type="number" name="minutes" className="form-control" />
                    <label for="minutes">Minutes to complete</label>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <section>
            <div className="card">
              <div id="card-chart-next"></div>
              <div className="card-body">
                <h4 className="card-title">Improved Daily Algorithm</h4>
                <p className="card-text">Tasks that you want to do everyday going forward</p>
                <a href="#" className="btn btn-primary">Add Daily Task</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
