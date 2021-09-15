import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders list of thing', async () => {
    render(
      <MemoryRouter initialEntries={['/specificpath']}>
        <App />
      </MemoryRouter>
    );

    screen.getByAltText('Loading spinner');

    const ul = await screen.findByRole('list', { name: 'thing' });
    screen.debug();
    expect(ul).not.toBeEmptyDOMElement();
  });
});
