import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Rockets from './Rockets';

const middlewares = [thunk];

describe('Rockets Component', () => {
  const initialState = {
    rockets: {
      rockets: [
        {
          id: '1',
          name: 'Falcon 1',
          flickr_images: ['image-url-1'],
          description: 'Description 1',
          reserved: false,
        },
        {
          id: '2',
          name: 'Falcon 9',
          flickr_images: ['image-url-2'],
          description: 'Description 2',
          reserved: true,
        },
      ],
    },
  };

  const mockStore = configureMockStore(middlewares);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('Rockets component renders correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('Rockets component displays rockets correctly', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    // Test that Rocket 1 is displayed
    expect(screen.getByText('Falcon 1')).toBeInTheDocument();
    expect(screen.getByText('Reserve rocket')).toBeInTheDocument();
    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();

    // Test that Rocket 2 is displayed
    expect(screen.getByText('Falcon 9')).toBeInTheDocument();
    expect(screen.getByText('Reserve rocket')).toBeInTheDocument();
    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();
  });
});
