require('../app');
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LeadList from '../components/SznList/LeadList'
import '../variables'


class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="page-header">
					<h3 className="page-title"> Basic Tables </h3>
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><a href="#">Tables</a></li>
							<li className="breadcrumb-item active" aria-current="page">Basic tables</li>
						</ol>
					</nav>
				</div>
				<div className="row">
					<div className="col-lg-12 grid-margin stretch-card">
						<BrowserRouter>
							<Switch>
								<Route exact path='/user/leads' component={LeadList} />
							</Switch>
						</BrowserRouter>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))