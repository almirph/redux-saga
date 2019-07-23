import { clickReducer } from './clickReducer';
//import { otherStateReducer } from './OtherReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  clickState: clickReducer
  //otherState: otherStateReducer
});
