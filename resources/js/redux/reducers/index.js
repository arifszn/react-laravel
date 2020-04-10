import authUserReducer from './authUser'
import activeComponentReducer from './activeComponent'
import { combineReducers } from 'redux'
//other reducers

const rootReducer = combineReducers({
    authUserReducer: authUserReducer,
    activeComponentReducer: activeComponentReducer
});

export default rootReducer;