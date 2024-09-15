import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders number 1.00 in the panel', () => {
  render(<App />);
  const panelElement = screen.getByText(/1.00/i);
  expect(panelElement).toBeInTheDocument();
});
