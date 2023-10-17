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
  reducers: {},
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

export default rocketsSlice.reducer;
