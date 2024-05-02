import type { FunctionComponent, PropsWithChildren } from 'react';

export const Grid: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="grid grid-cols-2 mt-12 w-full">{children}</div>;
};
