import React from 'react';
import { render, screen } from '@testing-library/react';
import FactoryView from './FactoryView';

test('renders learn react link', () => {
  render(<FactoryView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
