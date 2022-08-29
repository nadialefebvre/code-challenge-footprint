import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my footprint', () => {
  render(<App />);
  const linkElement = screen.getByText(/my footprint/i);
  expect(linkElement).toBeInTheDocument();
});
