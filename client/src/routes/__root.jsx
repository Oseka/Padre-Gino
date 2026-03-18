import { useState } from 'react';
import { createRootRoute, Outlet, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PizzaOfTheDay from '../PizzaOfTheDay';
import Header from '../Header';
import { CartContext } from '../contexts';

export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);
    return (
      <>
        <CartContext.Provider value={cartHook}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },

  notFoundComponent: () => {
    return (
      <div className="not-found">
        <h1>404 - Pizza Lost in Transit!</h1>
        <p>The page you are looking for doesn't exist.</p>
        <Link to="/" style={{ color: 'var(--yellow)', fontWeight: 'bold' }}>
          Return to the Homepage
        </Link>
      </div>
    );
  },
});
