import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import React from 'react';

import { PATH } from './Path';

const rootRoute = createRootRoute();

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PATH.HOME,
  component: React.lazy(() => import('Presentation/Page/HomePage')),
});

rootRoute.addChildren([homeRoute]);

export const router = createRouter({
  routeTree: rootRoute,
});
