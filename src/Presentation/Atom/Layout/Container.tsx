import type { FunctionComponent, PropsWithChildren } from 'react';

export const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-6xl m-auto">{children}</div>;
};
