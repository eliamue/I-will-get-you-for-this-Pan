import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const server = setupServer(
  rest.get('https://asdfjkhasdkfjhasdkjlfhasd.asdfasd', (req, res, ctx) => {
    return res(
      ctx.json({ data: { Thing: [{ param: 'thing', text: 'Boopboop' }] } })
    );
  })
);

describe('App', () => {
  it('renders list of thing', async () => {
    render(
      <MemoryRouter initialEntries={['/specificpath']}>
        <App />
      </MemoryRouter>
    );

    screen.getByAltText('Loading spinner');

    const ul = await screen.findByRole('list', { name: 'thing' });
    expect(ul).not.toBeEmptyDOMElement();

    const li = screen.getByText('boopboop');
    expect(li).toBeInTheDocument();
  });
});
