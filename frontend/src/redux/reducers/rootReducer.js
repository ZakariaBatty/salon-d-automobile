import { combineReducers } from 'redux';
import clientReducer from './client/clientReducer';

// create router
const rootReducer = combineReducers({
  client: clientReducer,
});

export default rootReducer;
