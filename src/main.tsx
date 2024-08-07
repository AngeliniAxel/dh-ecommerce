import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import LayoutMain from './components/Layouts/LayoutMain';
import Home from './pages/Home/Home';
import { CartProvider } from './context/CartProvider';
import Checkout from './pages/Checkout/Checkout';
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from './pages/Login/Login';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> },
      { path: '/checkout', element: <Checkout /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <p>Dashboard</p>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Toaster richColors />
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
