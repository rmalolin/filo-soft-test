import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import DashboardPage from './pages/dashboard/DashboardPage';
import ListPage from './pages/list/ListPage';

import './App.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 6000 * 10,
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/list' element={<ListPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
