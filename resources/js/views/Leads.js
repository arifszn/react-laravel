require('../app');
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import LeadList from '../components/SznList/LeadList'
import NewLead from '../components/SznList/NewLead'
import '../variables'
import {createStore} from 'redux';
import rootReducer from '../redux/reducers/index'
import { Provider, useDispatch, useSelector } from 'react-redux'
import rootAction from '../redux/actions/index'

//create reducer
const myStore = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


function App() {
	//set reducer
	const myDispatch = useDispatch();
	myDispatch(rootAction.setAuthUser(authUser)); //authUser is from blade file

	//get reducer
    const activeComponent = useSelector(state => state.activeComponentReducer);
	
	return (
		<React.Fragment>
			<BrowserRouter>
			<div className="page-header">
				<h3 className="page-title"> Basic Tables </h3>
				<nav aria-label="breadcrumb">
					{ activeComponent && activeComponent == 'LeadList' ?  
						<Link to='/lead/new' className="btn btn-gradient-dark btn-md"><i className="mdi mdi-account-plus btn-icon-prepend"></i>&nbsp; New</Link> : <Link to='/lead' className="btn btn-gradient-info btn-md"><i className="mdi mdi-arrow-left-bold btn-icon-prepend"></i>&nbsp; Back</Link>
					}
					
				</nav>
			</div>
			<div className="row">
				<div className="col-lg-12 grid-margin stretch-card">
					
						<Switch>
							<Route exact path='/lead' > <LeadList /> </Route>
							<Route path='/lead/new' > <NewLead /> </Route>
						</Switch>
					
				</div>
			</div>
			</BrowserRouter>
		</React.Fragment>
	);
}

ReactDOM.render(
	<Provider store={myStore}>
		<App />
	</Provider>
, document.getElementById('app'))