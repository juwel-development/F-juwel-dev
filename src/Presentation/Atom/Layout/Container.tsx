import type { FunctionComponent, PropsWithChildren } from 'react';

export const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-6xl p-3 md:p-4 lg:p-6 w-full mx-auto">{children}</div>;
};
