import type { FunctionComponent, PropsWithChildren } from 'react';

export const Article: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <article className="w-full py-1 md:py-4 lg:py-12 select-text motion-translate-x-in-0 motion-translate-y-in-[5%] motion-opacity-in-[0%] motion-blur-in-xs motion-duration-[1.00s]/opacity motion-duration-[0.97s]/blur">
      {children}
    </article>
  );
};
