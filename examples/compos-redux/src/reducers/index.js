import people from './people-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people
});

export default rootReducer;
