import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './menu/Menu';
import Home from './ui/Home';
import React from 'react';
import { getMenu } from './services/apiRestaurant';
import CreateOrder, { createOrderAction } from './order/CreateOrder';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
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
