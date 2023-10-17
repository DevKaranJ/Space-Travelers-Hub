import axios from 'axios';

export const fetchMissions = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    dispatch({ type: 'FETCH_MISSIONS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_MISSIONS_FAILURE', payload: error.message });
  }
};
