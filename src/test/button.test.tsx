import { render, screen } from '@testing-library/react';

import { Button } from '../components/Button';

test('renderiza label en el DOM', () => {
  render(<Button text="Guardar" />);
  expect(screen.getByText('Guardar')).toBeInTheDocument();
  expect(screen.getByLabelText('main-button')).toBeInTheDocument();
});