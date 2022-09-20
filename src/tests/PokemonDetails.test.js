import React from 'react';
import { screen, act } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('7. Teste o componente <PokemonDetails.js />', () => {
  it('Teste se as informações detalhadas do pokémon selecionado são mostradas', () => {
    const { history } = renderWithRouter(<App />);
    pokemons.forEach(({ id, name, summary }) => {
      act(() => {
        history.push(`/pokemons/${id}`);
      });
      const heading = screen.getByRole('heading', {
        name: `${name} Details`,
      });
      const summaryHeading = screen.getByRole('heading', {
        name: /summary/i,
      });
      const regExp = RegExp(summary.toLowerCase(), 'i');
      const paragraph = screen.getByText(regExp);
      expect(heading).toBeInTheDocument();
      expect(summaryHeading).toBeInTheDocument();
      expect(paragraph).toBeInTheDocument();
    });
  });
  it('Teste se existe uma seção com os mapas das localizações do pokémon', () => {
    const { history } = renderWithRouter(<App />);
    pokemons.forEach(({ name, id, foundAt }) => {
      act(() => {
        history.push(`/pokemons/${id}`);
      });
      const heading = screen.getByRole('heading', {
        name: `Game Locations of ${name}`,
      });
      expect(heading).toBeInTheDocument();
      foundAt.forEach((_, index, array) => {
        const imageByAltTxt = screen.getAllByAltText(`${name} location`);
        imageByAltTxt.forEach((e) => {
          expect(e).toHaveAttribute('src', array.map[index]);
        });
        expect(imageByAltTxt.length).toBe(array.length);
      });
    });
  });

  it('Teste se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);
    pokemons.forEach(({ id }) => {
      const moreDetails = screen.getByRole('link', {
        name: /more details/i,
      });
      expect(moreDetails).toHaveAttribute('href', `/pokemons/${id}`);
      const nextPoke = screen.getByRole('button', {
        name: /próximo pokémon/i,
      });
      userEvent.click(nextPoke);
    });
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(moreDetails);
    const checkbox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(checkbox);
    const favStar = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(favStar).toBeInTheDocument();
    userEvent.click(checkbox);
    expect(favStar).not.toBeInTheDocument();
  });
});
