import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import rick from '../../data/rick.json';
import charlist from '../../data/charlist.json';
import App from './App';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/', (req, res, ctx) => {
    return res(ctx.json(charlist));
  }),
  rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
    return res(ctx.json(rick));
  })
);

describe('App', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders list of characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.getByAltText('Loading');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();

    const li = await screen.findByText('Beth Smith');
    expect(li).toBeInTheDocument();
  });

  it('renders a Rick', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/1']}>
        <App />
      </MemoryRouter>
    );

    screen.getByAltText('Loading');

    const character = await screen.findByText('Rick Sanchez');
    expect(character).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
