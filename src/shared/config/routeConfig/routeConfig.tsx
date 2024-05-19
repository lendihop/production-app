import React, { lazy } from 'react';

import { RouteProps } from 'react-router-dom';

const MainPage = lazy(() => import('pages/MainPage'));
const AboutPage = lazy(() => import('pages/AboutPage'));

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  }
};
