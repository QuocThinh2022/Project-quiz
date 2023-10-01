import {combineReducers} from 'redux';
import authenReducer from './authen';

const allReducers = combineReducers({
    authenReducer,
    // Them cac reducer o day
})

export default allReducers;