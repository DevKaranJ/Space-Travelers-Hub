import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './features/rockets/rocketsSlice';

const rootReducer = combineReducers({
  rockets: rocketsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
