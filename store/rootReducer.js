import { combineReducers } from 'redux';
import contacts from '../modules/Reducer';

const rootReducer = combineReducers({
  contacts,
});

export default rootReducer;
