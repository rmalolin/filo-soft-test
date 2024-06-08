import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import DashboardPage from '../pages/dashboard/DashboardPage';
import Layout from '../pages/Layout';
import ListPage from '../pages/list/ListPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<DashboardPage />} />
      <Route path='list' element={<ListPage />} />
    </Route>
  )
);
