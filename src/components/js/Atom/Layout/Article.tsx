import type { FunctionComponent, PropsWithChildren } from 'react';

export const Article: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <article className="w-full py-1 md:py-4 lg:py-12 select-text">
      {children}
    </article>
  );
};
