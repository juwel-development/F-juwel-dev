import type { FunctionComponent, PropsWithChildren } from 'react';

export const Grid: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="grid grid-cols-1 md:grid-cols-3 content-center justify-between mt-12 w-full">{children}</div>;
};
