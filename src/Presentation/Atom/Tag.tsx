import type { FunctionComponent, PropsWithChildren } from 'react';

export const Tag: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <span className="bg-primary-500 text-primary-900 px-2 py-1 mr-4 text-sm rounded-lg">{children}</span>;
};
