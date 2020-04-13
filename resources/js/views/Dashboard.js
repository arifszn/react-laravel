require('../app');
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import '../variables'
import Dashboard from '../components/Dashboard'
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
            <Dashboard/>
		</React.Fragment>
	);
}

ReactDOM.render(
	<Provider store={myStore}>
		<App />
	</Provider>
, document.getElementById('app'))