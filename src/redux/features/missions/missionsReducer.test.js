import missionsReducer from './missionsReducer';

describe('missionsReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      missions: [],
      error: null,
    };
    expect(missionsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_MISSIONS_SUCCESS', () => {
    const initialState = {
      missions: [],
      error: null,
    };
    const action = {
      type: 'FETCH_MISSIONS_SUCCESS',
      payload: [{ mission_id: 1, reserved: false }],
    };
    const expectedState = {
      missions: action.payload,
      error: null,
    };
    expect(missionsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FETCH_MISSIONS_FAILURE', () => {
    const initialState = {
      missions: [],
      error: null,
    };
    const action = {
      type: 'FETCH_MISSIONS_FAILURE',
      payload: 'Error message',
    };
    const expectedState = {
      missions: [],
      error: 'Error message',
    };
    expect(missionsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle JOIN_MISSION', () => {
    const initialState = {
      missions: [{ mission_id: 1, reserved: false }, { mission_id: 2, reserved: false }],
      error: null,
    };
    const action = {
      type: 'JOIN_MISSION',
      payload: 1,
    };
    const expectedState = {
      missions: [{ mission_id: 1, reserved: true }, { mission_id: 2, reserved: false }],
      error: null,
    };
    expect(missionsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LEAVE_MISSION', () => {
    const initialState = {
      missions: [{ mission_id: 1, reserved: true }, { mission_id: 2, reserved: false }],
      error: null,
    };
    const action = {
      type: 'LEAVE_MISSION',
      payload: 1,
    };
    const expectedState = {
      missions: [{ mission_id: 1, reserved: false }, { mission_id: 2, reserved: false }],
      error: null,
    };
    expect(missionsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should return the current state for an unknown action', () => {
    const initialState = {
      missions: [{ mission_id: 1, reserved: false }],
      error: null,
    };
    const action = {
      type: 'UNKNOWN_ACTION',
      payload: 'Some data',
    };
    expect(missionsReducer(initialState, action)).toEqual(initialState);
  });
});
