import authUserReducer from './authUser'
import { combineReducers } from 'redux'
//other reducers

const rootReducer = combineReducers({
    authUserReducer: authUserReducer
});

export default rootReducer;