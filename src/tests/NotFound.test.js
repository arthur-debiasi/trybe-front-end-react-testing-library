import React from 'react';
import { screen, render } from '@testing-library/react';
import { NotFound } from '../pages';

describe('4. Teste o componente <NotFound.js />', () => {
  test('Teste se a página contém um h2 "Page requested not found"', () => {
    render(<NotFound />);
    const pageNotFoundText = screen.getByRole('heading', {
      name: /page requested not found/i,
    });
    const pageNotFoundImage = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(pageNotFoundText).toBeInTheDocument();
    expect(pageNotFoundImage).toBeInTheDocument();
    expect(pageNotFoundImage).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
