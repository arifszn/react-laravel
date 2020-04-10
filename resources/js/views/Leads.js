require('../app');
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LeadList from '../components/SznList/LeadList'
import '../variables'
import {createStore} from 'redux';
import rootReducer from '../redux/reducers/index'
import { Provider, useDispatch } from 'react-redux'
import setAuthUser from '../redux/actions/index'

//create reducer
const myStore = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


function App() {
	//set reducer
	const myDispatch = useDispatch();
	myDispatch(setAuthUser(authUser));

	//get reducer
    // const authUser = useSelector(state => state.authUserReducer);

	return (
		<React.Fragment>
			<div className="page-header">
				<h3 className="page-title"> Basic Tables </h3>
				<nav aria-label="breadcrumb">
					<button className="btn btn-gradient-dark btn-md"><i className="mdi mdi mdi-account-plus"></i>&nbsp; New</button>
				</nav>
			</div>
			<div className="row">
				<div className="col-lg-12 grid-margin stretch-card">
					<BrowserRouter>
						<Switch>
							<Route exact path='/lead' > <LeadList /> </Route>
							<Route exact path='/lead/new' > <LeadList /> </Route>
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		</React.Fragment>
	);
}

ReactDOM.render(
	<Provider store={myStore}>
		<App />
	</Provider>
, document.getElementById('app'))