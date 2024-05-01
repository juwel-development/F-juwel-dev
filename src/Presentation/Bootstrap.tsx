import 'Presentation/Style/main.css';

import { RouterProvider } from '@tanstack/react-router';
import type { FunctionComponent } from 'react';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { router } from './Routing/RouteDefinition';

const AppComponent: FunctionComponent = () => {
  return (
    <StrictMode>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
};

export const Bootstrap = {
  /**
   * initializes react and render main element
   */
  init: (): void => {
    const element = document.createElement('div');

    element.id = 'app';
    document.body.appendChild(element);

    createRoot(element).render(<AppComponent />);
    //const applicationStream = container.resolve<Subject<IEvent<unknown>>>(applicationStreamToken);

    //await import('../Domain/Application/ApplicationModule');
    //applicationStream.next(new ApplicationStartedEvent());
  },
};