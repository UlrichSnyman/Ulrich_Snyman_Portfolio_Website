import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio main heading', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { name: /Ulrich Snyman/i, level: 1 });
  expect(titleElement).toBeInTheDocument();
});

test('renders skills and certificates section', () => {
  render(<App />);
  const skillsElement = screen.getByText(/Skills, Technologies & Certificates/i);
  expect(skillsElement).toBeInTheDocument();
});
