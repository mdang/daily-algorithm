import React, { Component } from 'react';

import './App.css';

import {Pie, Bar} from 'react-chartjs-2';


class App extends Component {
  render() {
    const pieData = {
    	labels: [
    		'Red',
    		'Green',
    		'Yellow'
    	],
    	datasets: [{
    		data: [300, 50, 100],
    		backgroundColor: [
    		'#FF6384',
    		'#36A2EB',
    		'#FFCE56'
    		],
    		hoverBackgroundColor: [
    		'#FF6384',
    		'#36A2EB',
    		'#FFCE56'
    		]
    	}]
    };

    const barData = {
      labels: ['January', 'February', 'March'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,255,255,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80]
        },
        {
          label: 'My Second dataset',
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
      <div className="app container-fluid">
        <nav className="heading navbar navbar-dark deep-orange darken-2">
          <a className="navbar-brand" href="/">Daily Algorithm</a>
        </nav>

        <main className="container-fluid">
          <article>
            <section>
              <div className="card">
                <nav className="navbar navbar-dark deep-orange lighten-1">
                  Current Time Usage
                </nav>
                <div className="card-chart">

                  <Pie data={pieData} />

                </div>
                <div className="card-body">
                  <p className="card-text text-center">Tasks that you currently do everyday</p>
                </div>
              </div>
            </section>

            <section>
              <div className="card">
                <nav className="navbar navbar-dark deep-orange lighten-1">
                  Optimized Time Usage
                </nav>
                <div className="card-chart">

                  <Pie data={pieData} />

                </div>
                <div className="card-body">
                  <p className="card-text text-center">Tasks that you want to do everyday going forward</p>
                </div>
              </div>
            </section>

            <section>
              <div className="card">
                <nav className="navbar navbar-dark deep-orange lighten-1">
                  Top Time Thieves
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
                  <p className="card-text text-center">Tasks that you want to do everyday going forward</p>
                </div>
              </div>
            </section>
          </article>

          <article>
            <div class="text-center">
              <button class="btn btn-default">Add Daily Task</button>
            </div>

            <section className="tasks-container">

              <div className="card task">
                <div className="card-body">
                  <div className="card-remove">
                    <a href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                  </div>
                  <form>
                    <div className="md-form">
                      <input type="text" name="task" className="form-control" />
                      <label for="task">Task</label>
                    </div>

                    <div className="md-form">
                      <i className="fa fa-clock-o prefix grey-text"></i>
                      <input type="number" name="minutes" className="form-control" />
                      <label for="minutes">Current Time</label>
                    </div>

                    <div className="md-form">
                      <i className="fa fa-clock-o prefix grey-text"></i>
                      <input type="number" name="minutes" className="form-control" />
                      <label for="minutes">Ideal Time</label>
                    </div>
                  </form>
                </div>
              </div>

              <div className="card task">
                <div className="card-body">
                  <div className="card-remove">
                    <a href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                  </div>
                  <form>
                    <div className="md-form">
                      <input type="text" name="task" className="form-control" />
                      <label for="task">Task</label>
                    </div>

                    <div className="md-form">
                      <i className="fa fa-clock-o prefix grey-text"></i>
                      <input type="number" name="minutes" className="form-control" />
                      <label for="minutes">Current Time</label>
                    </div>

                    <div className="md-form">
                      <i className="fa fa-clock-o prefix grey-text"></i>
                      <input type="number" name="minutes" className="form-control" />
                      <label for="minutes">Ideal Time</label>
                    </div>
                  </form>
                </div>
              </div>

              <div className="card task">
                <div className="card-body">
                  <div className="card-remove">
                    <a href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                  </div>
                  <form>
                    <div className="md-form">
                      <input type="text" name="task" className="form-control" />
                      <label for="task">Task</label>
                    </div>

                    <div className="md-form">
                      <i className="fa fa-clock-o prefix grey-text"></i>
                      <input type="number" name="minutes" className="form-control" />
                      <label for="minutes">Current Time</label>
                    </div>

                    <div className="md-form">
                      <i className="fa fa-clock-o prefix grey-text"></i>
                      <input type="number" name="minutes" className="form-control" />
                      <label for="minutes">Ideal Time</label>
                    </div>
                  </form>
                </div>
              </div>

              <div className="card task">
                <div className="card-body">
                  <div className="card-remove">
                    <a href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                  </div>
                  <form>
                    <div className="md-form">
                      <input type="text" name="task" className="form-control" />
                      <label for="task">Task</label>
                    </div>

                    <div className="md-form">
                      <i className="fa fa-clock-o prefix grey-text"></i>
                      <input type="number" name="minutes" className="form-control" />
                      <label for="minutes">Current Time</label>
                    </div>

                    <div className="md-form">
                      <i className="fa fa-clock-o prefix grey-text"></i>
                      <input type="number" name="minutes" className="form-control" />
                      <label for="minutes">Ideal Time</label>
                    </div>
                  </form>
                </div>
              </div>

              <div className="card task">
                <div className="card-body">
                  <div className="card-remove">
                    <a href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                  </div>
                  <form>
                    <div className="md-form">
                      <input type="text" name="task" className="form-control" />
                      <label for="task">Task</label>
                    </div>

                    <div className="md-form">
                      <i className="fa fa-clock-o prefix grey-text"></i>
                      <input type="number" name="minutes" className="form-control" />
                      <label for="minutes">Current Time</label>
                    </div>

                    <div className="md-form">
                      <i className="fa fa-clock-o prefix grey-text"></i>
                      <input type="number" name="minutes" className="form-control" />
                      <label for="minutes">Ideal Time</label>
                    </div>
                  </form>
                </div>
              </div>

            </section>
          </article>
        </main>
      </div>
    );
  }
}

export default App;
