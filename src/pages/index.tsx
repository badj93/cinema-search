import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Main } from './main';

const AuthPage = lazy(() => import('./auth'));
const FavoritePage = lazy(() => import('./favorite'));
const CinemaPage = lazy(() => import('./cinema'));
const SeriesPage = lazy(() => import('./series'));
const MediaPage = lazy(() => import('./media'));

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
      <Route key={'cinema'} path={'/cinema'} element={<CinemaPage />} />
      <Route key={'series'} path={'/series'} element={<SeriesPage />} />
      <Route key={'media'} path={'/media'} element={<MediaPage />} />
    </Routes>
  );
};
