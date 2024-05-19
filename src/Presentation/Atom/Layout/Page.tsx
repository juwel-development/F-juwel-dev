import bg from 'Presentation/Atom/Layout/bg.png';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const Page: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="absolute top-0 bottom-0 right-0 left-0 bg-repeat -z-10 select-none overflow-auto"
      style={{ backgroundImage: `url(${bg}` }}
    >
      {children}
    </div>
  );
};
