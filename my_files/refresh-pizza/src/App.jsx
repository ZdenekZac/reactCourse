import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './features/menu/Menu';
import Home from './ui/Home';
import React from 'react';
import { getMenu } from './services/apiRestaurant';
import CreateOrder, { createOrderAction } from './features/order/CreateOrder';
import AppLayout from './ui/AppLayout';
import Cart from './features/cart/Cart';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: getMenu,
      },
      {
        path: 'order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
