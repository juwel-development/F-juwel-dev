import type { FunctionComponent, PropsWithChildren } from 'react';

export const Box: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="w-52 h-24 bg-background-box rounded-lg shadow p-3 m-auto bg-opacity-60">{children}</div>;
};
