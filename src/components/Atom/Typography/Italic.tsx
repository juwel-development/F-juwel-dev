import type { FunctionComponent, PropsWithChildren } from 'react';

export const Italic: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <em className="italic">{children}</em>;
};
