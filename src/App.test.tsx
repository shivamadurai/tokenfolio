import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App Component', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Select Currency/i);
  expect(linkElement).toBeInTheDocument();
});
