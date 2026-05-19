import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from './styles/GlobalStyles';

import AppLayout from './ui/AppLayout';
import Dashboard from './pages/Dashboard';
import Rentals from './pages/Rentals';
import Vans from './pages/Vans';
import Login from './pages/Login';
import Guests from './pages/Guests';
import Staff from './pages/Staff';
import Settings from './pages/Settings';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to='dashboard' />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='rentals' element={<Rentals />} />
              <Route path='vans' element={<Vans />} />
              <Route path='staff' element={<Staff />} />
              <Route path='guests' element={<Guests />} />
              <Route path='settings' element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position='top-center'
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-grey-700)',
              color: 'var(--color-grey-0)',
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
