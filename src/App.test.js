import { render, screen } from '@testing-library/react';
import App from './App';

test('displays under-construction message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/best night of the week/i);
  expect(welcomeMessage).toBeInTheDocument();
})

test('renders instagram link', () => {
  render(<App />);
  const linkElement = screen.getByText(/visit our instagram/i);
  expect(linkElement).toBeInTheDocument();
});
