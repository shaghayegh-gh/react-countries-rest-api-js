import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello', () => {
  render(<App />);
  const text = screen.getByText(/Hello/i);
  expect(text).toBeInTheDocument();
});
