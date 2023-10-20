import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { fetchMissions, joinMission, leaveMission } from './missions'; // Replace with the actual path to your actions

jest.mock('axios'); // Mock the axios module

const mockStore = configureMockStore([thunk]);

describe('Redux Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('should create a snapshot for fetchMissions action', async () => {
    axios.get.mockResolvedValue({ data: [{ mission: 'Mission 1' }, { mission: 'Mission 2' }] });

    await store.dispatch(fetchMissions());

    expect(store.getActions()).toMatchSnapshot();
  });

  it('should create a snapshot for joinMission action', () => {
    const missionId = 1;
    store.dispatch(joinMission(missionId));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should create a snapshot for leaveMission action', () => {
    const missionId = 1;
    store.dispatch(leaveMission(missionId));
    expect(store.getActions()).toMatchSnapshot();
  });
});
