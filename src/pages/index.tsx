import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const AuthPage = lazy(() => import('./auth'));
const FavoritePage = lazy(() => import('./favorite'));

export const Routing = () => {
  return (
    <Routes>
      <Route path={'/'} />
      <Route path={'/auth'} element={<AuthPage />} />
      <Route path={'/favorite'} element={<FavoritePage />} />
    </Routes>
  );
};
