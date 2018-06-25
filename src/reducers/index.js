import { combineReducers } from 'redux';
import addresses from './addresses';
import navReducer from './navigator';

const rootReducer = combineReducers({
  nav: navReducer,
  addresses,
});

export default rootReducer;
