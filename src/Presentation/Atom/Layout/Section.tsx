import type { FunctionComponent, PropsWithChildren } from 'react';

export const Section: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <section className="w-full py-1 md:py-2 lg:py-6">{children}</section>;
};
