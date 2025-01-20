import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders learn react link', () => {
  render(<Counter />);
  const linkElement = screen.getByText(/Incrementar/i);
  expect(linkElement).toBeInTheDocument();
});