import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {homeReducer} from './home';

const reducer = combineReducers({
  globalReducer,
  homeReducer,
});

export default reducer;
