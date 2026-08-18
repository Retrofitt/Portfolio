import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Rafael Mendoza portfolio', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Rafael Mendoza/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
