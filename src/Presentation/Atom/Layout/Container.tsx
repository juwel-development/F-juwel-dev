import type { FunctionComponent, PropsWithChildren } from 'react';

export const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-6xl w-full mx-auto">{children}</div>;
};
