import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import { FavoritePokemons } from '../pages';

describe('3. Teste o componente <FavoritePokemons.js />', () => {
  it('Teste se é exibida na tela a mensagem "No favorite pokemon found"', () => {
    render(<FavoritePokemons />);
    const noFavorite = screen.getByText(/no favorite pokemon found/i);
    expect(noFavorite).toBeInTheDocument();
  });
  it('Teste se são exibidos todos os cards de pokémons favoritados', () => {
    const { history } = renderWithRouter(<App />);
    let moreDetailsLink = screen.getByRole('link', {
      name: /more details/i,
    });
    const homeLink = screen.getByRole('link', {
      name: /home/i,
    });
    let nextPokemon = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    expect(moreDetailsLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(nextPokemon).toBeInTheDocument();

    userEvent.click(moreDetailsLink);
    expect(history.location.pathname).toBe('/pokemons/25');

    let isFavoritedPokemon = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(isFavoritedPokemon);
    const pikachuFavoritedImgStar = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(pikachuFavoritedImgStar).toBeInTheDocument();

    userEvent.click(homeLink);
    expect(history.location.pathname).toBe('/');
    nextPokemon = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    userEvent.click(nextPokemon);
    moreDetailsLink = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(moreDetailsLink);
    expect(history.location.pathname).toBe('/pokemons/4');
    isFavoritedPokemon = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(isFavoritedPokemon);
    const charmanderFavorited = screen.getByRole('img', {
      name: /charmander is marked as favorite/i,
    });
    expect(charmanderFavorited).toBeInTheDocument();

    const favoritesLink = screen.getByRole('link', {
      name: /favorite pokémons/i,
    });
    userEvent.click(favoritesLink);
    expect(history.location.pathname).toBe('/favorites');
    const pikachuText = screen.getByText(/pikachu/i);
    const pikachuType = screen.getByText(/electric/i);
    const pikachuWeight = screen.getByText(/average weight: 6\.0 kg/i);
    const pikachuImg = screen.getByRole('img', {
      name: /pikachu sprite/i,
    });
    const charmanderText = screen.getByText(/charmander/i);
    const charmanderType = screen.getByText(/fire/i);
    const charmanderWeight = screen.getByText(/average weight: 8\.5 kg/i);
    const charmanderImg = screen.getByRole('img', {
      name: /charmander sprite/i,
    });

    expect(pikachuText).toBeInTheDocument();
    expect(pikachuType).toBeInTheDocument();
    expect(pikachuWeight).toBeInTheDocument();
    expect(pikachuImg).toBeInTheDocument();
    expect(pikachuImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');

    expect(charmanderText).toBeInTheDocument();
    expect(charmanderType).toBeInTheDocument();
    expect(charmanderWeight).toBeInTheDocument();
    expect(charmanderImg).toBeInTheDocument();
    expect(charmanderImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');
  });
});
