import type { FunctionComponent, PropsWithChildren } from 'react';

export const Strong: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <strong className="font-bold">{children}</strong>;
};
