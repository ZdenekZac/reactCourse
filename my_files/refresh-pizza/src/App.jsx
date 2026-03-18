import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './features/menu/Menu';
import Home from './ui/Home';
import React from 'react';
import { getMenu } from './services/apiRestaurant';
import CreateOrder, { createOrderAction } from './features/order/CreateOrder';
import AppLayout from './ui/AppLayout';
import Cart from './features/cart/Cart';
import Error from './ui/Error';
import Order, {
  loader as orderLoader,
} from '../../fast-react-pizza/src/features/order/Order';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: 'order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
