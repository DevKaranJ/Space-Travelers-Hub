import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  fetchStatus: 'idle',
  addStatus: 'idle',
  removeStatus: 'idle',
  error: null,
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setRockets: (state, action) => {
      state.rockets = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.fetchStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.fetchStatus = 'succeeded';
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.fetchStatus = 'failed';
        state.error = action.error.message;
      });
  },
});

export const reserveRocket = createAsyncThunk(
  'rockets/reserveRocket',
  async (rocketId, { getState, dispatch }) => {
    const state = getState();
    const { rockets } = state;

    // Find the selected rocket by its id
    const selectedRocket = rockets.rockets.find(
      (rocket) => rocket.id === rocketId,
    );

    if (selectedRocket) {
      // eslint-disable-next-line max-len
      const updatedRockets = rockets.rockets.map((rocket) => (rocket.id === rocketId ? { ...rocket, reserved: true } : rocket));

      dispatch(rocketsSlice.actions.setRockets(updatedRockets));

      return updatedRockets;
    }

    return rocketId;
  },
);

export const cancelRocketReservation = createAsyncThunk(
  'rockets/cancelRocketReservation',
  async (rocketId, { getState, dispatch }) => {
    const state = getState();
    const { rockets } = state;

    // Find the selected rocket by its id
    const selectedRocket = rockets.rockets.find(
      (rocket) => rocket.id === rocketId,
    );

    if (selectedRocket) {
      // eslint-disable-next-line max-len
      const updatedRockets = rockets.rockets.map((rocket) => (rocket.id === rocketId ? { ...rocket, reserved: false } : rocket));

      dispatch(rocketsSlice.actions.setRockets(updatedRockets));

      return updatedRockets;
    }

    return rocketId;
  },
);

export default rocketsSlice.reducer;
