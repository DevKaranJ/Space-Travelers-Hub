import { combineReducers } from 'redux';
import missionsReducer from './missions/missionsReducer';

const rootReducer = combineReducers({
  missions: missionsReducer,
});

export default rootReducer;
