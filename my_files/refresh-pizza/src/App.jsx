import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import React from 'react';
import { getMenu } from './services/apiRestaurant';
import CreateOrder, { createOrderAction } from './CreateOrder';
import AppLayout from './AppLayout';

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
