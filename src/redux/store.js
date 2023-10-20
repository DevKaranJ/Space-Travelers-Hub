import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './features/rockets/rocketsSlice';
import missionsReducer from './features/missions/missionsReducer'; // Import your missionsReducer

const rootReducer = combineReducers({
  rockets: rocketsSlice,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
