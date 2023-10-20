const initialState = {
  missions: [],
  error: null,
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MISSIONS_SUCCESS':
      return {
        ...state,
        missions: action.payload,
        error: null,
      };
    case 'FETCH_MISSIONS_FAILURE':
      return {
        ...state,
        missions: [],
        error: action.payload,
      };
    case 'JOIN_MISSION':
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, reserved: true };
          }
          return mission;
        }),
      };
    case 'LEAVE_MISSION':
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, reserved: false };
          }
          return mission;
        }),
      };
    default:
      return state;
  }
};

export default missionsReducer;
