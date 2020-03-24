import {combineReducers} from 'redux';
import todos from './todo.js'

const rootReducer = combineReducers({todos});

export default rootReducer;