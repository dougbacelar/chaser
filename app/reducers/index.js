import { combineReducers } from 'redux';
import addresses from './addresses';

const rootReducer = combineReducers({
  eth: addresses,
});

export default rootReducer;
