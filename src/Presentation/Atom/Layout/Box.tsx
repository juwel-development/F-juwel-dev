import type { FunctionComponent, PropsWithChildren } from 'react';

export const Box: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="w-64 h-32 bg-background-box rounded-lg shadow p-3 bg-opacity-60">{children}</div>;
};
