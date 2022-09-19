import React from 'react';
import { screen, render } from '@testing-library/react';
import { About } from '../pages';

describe('2. Teste o componente <About.js />.', () => {
  it('Teste se a página contém um heading h2 com o texto "About Pokédex"', () => {
    render(<About />);
    const aboutTitle = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2,
    });
    expect(aboutTitle).toBeInTheDocument();
  });
  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    render(<About />);
    const aboutText1 = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all pok/i,
      { exact: false },
    );
    const aboutText2 = screen.getByText(
      /One can filter Pokémons by type, and see more details for each one of them/i,
      { exact: false },
    );
    expect(aboutText1).toBeInTheDocument();
    expect(aboutText2).toBeInTheDocument();
  });
  it('Teste se a página contém a imagem correta de uma Pokédex:', () => {
    render(<About />);
    const aboutImage = screen.getByRole('img', { name: /pokédex/i });
    expect(aboutImage).toBeInTheDocument();
    expect(aboutImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
