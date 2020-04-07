import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../components/Login'
import Registration from '../components/Registration'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/user/login' component={Login} />
              <Route exact path='/user/registration' component={Registration} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))