import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import React from 'react';

import { PATH } from './Path';

const rootRoute = createRootRoute();

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PATH.HOME,
  component: React.lazy(() => import('Presentation/Page/HomePage')),
});

const imprintRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PATH.IMPRINT,
  component: React.lazy(() => import('Presentation/Page/ImprintPage')),
});

rootRoute.addChildren([homeRoute, imprintRoute]);

const softwareDevelopmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PATH.SOFTWARE_DEVELOPMENT,
  component: React.lazy(() => import('Presentation/Page/SoftwareDevelopment/SoftwareDevelopmentPage')),
});

homeRoute.addChildren([softwareDevelopmentRoute]);

export const router = createRouter({
  routeTree: rootRoute,
});
