import type { FunctionComponent, PropsWithChildren } from 'react';

export const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-6xl p-2 md:p-4 lg:p-6 m-auto">{children}</div>;
};
