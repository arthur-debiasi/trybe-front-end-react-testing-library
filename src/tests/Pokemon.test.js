import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('6. Teste o componente <Pokemon.js />', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    pokemons.forEach(({
      name,
      id,
      type,
      averageWeight: { value, measurementUnit },
      image,
    }, index) => {
      const { history } = renderWithRouter(<App />);
      const nextPoke = screen.getByRole('button', {
        name: /próximo pokémon/i,
      });
      for (let i = 0; i < index; i += 1) {
        userEvent.click(nextPoke);
      }

      const detailsBtn = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(detailsBtn);
      expect(history.location.pathname).toBe(`/pokemons/${id}`);
      const title = screen.getByRole('heading', {
        name: `${name} Details`,
        level: 2,
      });
      const nameText = screen.getAllByTestId('pokemon-name')[index];
      const typeText = screen.getAllByTestId('pokemon-type')[index];
      const weightText = screen.getAllByTestId('pokemon-weight')[index];
      expect(title).toBeInTheDocument();
      expect(nameText).toBeInTheDocument();
      expect(nameText.innerHTML).toBe(name);
      expect(typeText).toBeInTheDocument();
      expect(typeText.innerHTML).toBe(type);
      expect(weightText).toBeInTheDocument();
      const weightInnerHTML = `Average weight: ${value} ${measurementUnit}`;
      expect(weightText.innerHTML).toBe(weightInnerHTML);
      const pokeImage = screen.getByRole('img', {
        name: `${name} sprite`,
      });
      expect(pokeImage).toBeInTheDocument();
      expect(pokeImage).toHaveAttribute('src', image);
    });
  });

  it('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(moreDetails);
    const favCheckbox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(favCheckbox);
    const favStar = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(favStar).toBeInTheDocument();
    expect(favStar).toHaveAttribute('src', '/star-icon.svg');
  });
});
