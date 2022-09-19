import React from 'react';
import { screen, act } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('1. Teste o componente <App.js />', () => {
  it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const navBar = screen.getByRole('navigation');
    const navChildren = navBar.children;
    const navChildrenAmount = 3;
    const homeLink = screen.getByRole('link', {
      name: /home/i,
    });
    const aboutLink = screen.getByRole('link', {
      name: /about/i,
    });
    const favoritePokemonsLink = screen.getByRole('link', {
      name: /favorite pokémons/i,
    });
    expect(navChildren.length).toBe(navChildrenAmount);
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoritePokemonsLink).toBeInTheDocument();
  });
  it('Teste se clicar no link Home redireciona para a rota "/"', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', {
      name: /home/i,
    });
    userEvent.click(homeLink);
    const homePathname = history.location.pathname;
    expect(homePathname).toBe('/');
  });

  it('Teste se clicar no link About redireciona para a rota "/about"', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', {
      name: /about/i,
    });
    userEvent.click(aboutLink);
    const aboutPathname = history.location.pathname;
    expect(aboutPathname).toBe('/about');
  });

  it('Teste se clicar no link Favorite Pokémons redireciona para "/favorites"', () => {
    const { history } = renderWithRouter(<App />);
    const favoritePokemonsLink = screen.getByRole('link', {
      name: /favorite pokémons/i,
    });
    userEvent.click(favoritePokemonsLink);
    const favoritesPathname = history.location.pathname;
    expect(favoritesPathname).toBe('/favorites');
  });

  it('Teste se entrar em uma URL desconhecida redireciona para Not Found.', () => {
    const { history } = renderWithRouter(<App />);
    act(() => history.push('/rogerinhoDoInga'));
    const notFoundText = screen.getByRole('heading', {
      name: /page requested not found/i,
    });
    const notFoundImage = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(notFoundText).toBeInTheDocument();
    expect(notFoundImage).toBeInTheDocument();
  });
});
