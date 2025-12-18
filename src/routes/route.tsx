import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Layout } from '../pages/layout';
import { Home } from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Shop from '../pages/Shop/Shop';

export const router = createBrowserRouter([
  {
    path: '/', // ecommerce
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'shop/:category?',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <h1>About</h1>
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <h1>Contact</h1>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },
  
]);
