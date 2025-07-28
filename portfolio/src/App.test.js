import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio main heading', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { name: /Ulrich Snyman/i, level: 1 });
  expect(titleElement).toBeInTheDocument();
});

test('renders technologies section', () => {
  render(<App />);
  const technologiesElement = screen.getByText(/Technologies & Skills/i);
  expect(technologiesElement).toBeInTheDocument();
});
