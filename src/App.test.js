
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders App component', () => {
  const { getByText } = render(<App />);
  expect(getByText('Customer Rewards')).toBeInTheDocument();
});
