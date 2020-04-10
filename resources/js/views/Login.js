require('../app');
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../components/Login'
import Registration from '../components/Registration'
import '../variables'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container-scroller">
              <div className="container-fluid page-body-wrapper full-page-wrapper">
                  <div className="content-wrapper d-flex align-items-center auth">
                      <div className="row flex-grow">
                          <div className="col-lg-4 mx-auto">
                              <div>
                                <Switch>
                                  <Route exact path='/login' component={Login} />
                                  <Route path='/registration' component={Registration} />
                                </Switch>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))