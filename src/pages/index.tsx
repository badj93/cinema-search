import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Main } from './main';

const AuthPage = lazy(() => import('./auth'));
const FavoritePage = lazy(() => import('./favorite'));

export const Routing = () => {
  return (
    <Routes>
      <Route key={'main-page'} path={'/'} element={<Main />} />
      <Route key={'auth-page'} path={'/auth'} element={<AuthPage />} />
      <Route
        key={'favorite-page'}
        path={'/favorite'}
        element={<FavoritePage />}
      />
    </Routes>
  );
};
