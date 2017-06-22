import rootReducer from '../reducers';
import {createStore} from 'redux';

export default (initialState) => {
  return createStore(rootReducer, initialState);
};
