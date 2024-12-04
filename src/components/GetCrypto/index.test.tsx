import React from 'react';
import { render, screen } from '@testing-library/react';
import {GetCrypto} from './index';
import {currencies} from "../../constants/currency"

test('renders GetCrypto Component', () => {
  render(<GetCrypto/>);
  const linkElement = screen.getByText(/Select Currency/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders GetCrypto Component', () => {
    render(<GetCrypto/>);
    expect(screen.getByText(currencies[0].value)).toBeInTheDocument();
  });
