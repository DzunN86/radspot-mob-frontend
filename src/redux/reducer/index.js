import {combineReducers} from 'redux';
import {globalReducer} from './global';

const reducer = combineReducers({
  globalReducer,
});

export default reducer;
