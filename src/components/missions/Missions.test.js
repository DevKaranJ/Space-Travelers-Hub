import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from './Missions';

const mockStore = configureStore([thunk]);

describe('Missions Component', () => {
  it('renders Missions component with sample data', async () => {
    const initialState = {
      missions: {
        missions: [
          {
            mission_id: 1,
            mission_name: 'Mission 1',
            description: 'Mission description 1',
            reserved: true,
          },
          {
            mission_id: 2,
            mission_name: 'Mission 2',
            description: 'Mission description 2',
            reserved: false,
          },
        ],
        error: null,
      },
    };

    const store = mockStore(initialState);

    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
