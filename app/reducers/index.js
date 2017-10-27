import { combineReducers } from 'redux';
import addresses from './addresses';
import navReducer from './navigator';

const rootReducer = combineReducers({
  nav: navReducer,
  eth: addresses,
});

export default rootReducer;
