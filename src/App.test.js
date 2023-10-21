import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders App component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  expect(screen.getByText('Rockets')).toBeInTheDocument();
  expect(screen.getByText('Missions')).toBeInTheDocument();
  expect(screen.getByText('My Profile')).toBeInTheDocument();
});
