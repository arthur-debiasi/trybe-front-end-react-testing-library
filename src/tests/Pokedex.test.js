import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('5. Teste o componente <Pokedex.js />', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const encounteredText = screen.getByRole('heading', {
      name: /encountered pokémons/i,
      level: 2,
    });
    expect(encounteredText).toBeInTheDocument();
  });
  it('Teste se é exibido o próximo pokémon clicando no botão Próximo pokémon', () => {
    renderWithRouter(<App />);
    pokemons.forEach(({ name }) => {
      const regExp = RegExp(name.toLowerCase(), 'i');
      console.log(regExp);
      const pokeName = screen.getByText(regExp);
      expect(pokeName).toBeInTheDocument();
      const nextPokemon = screen.getByRole('button', {
        name: /próximo pokémon/i,
      });
      userEvent.click(nextPokemon);
    });
  });
  it('Teste se a Pokédex tem os botões de filtro:', () => {
    renderWithRouter(<App />);
    const allFilterBtn = screen.queryAllByTestId('pokemon-type-button');
    const ALL_FILTER_BTN_LENGTH = 7;
    expect(allFilterBtn.length).toBe(ALL_FILTER_BTN_LENGTH);
    pokemons.forEach(({ type }) => {
      const btn = screen.getByRole('button', {
        name: type,
      });
      const allBtn = screen.getByRole('button', {
        name: /all/i,
      });
      expect(btn).toBeInTheDocument();
      expect(allBtn).toBeInTheDocument();
    });
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const filterAllBtn = screen.getByRole('button', {
      name: /all/i,
    });
    expect(filterAllBtn).toBeInTheDocument();
    expect(filterAllBtn.innerHTML).toBe('All');
    const bugBtn = screen.getByRole('button', {
      name: /bug/i,
    });
    const nextPoke = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    expect(nextPoke).not.toBeDisabled();
    userEvent.click(bugBtn);
    expect(nextPoke).toBeDisabled();
    userEvent.click(filterAllBtn);
  });
});
