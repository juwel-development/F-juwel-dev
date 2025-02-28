import type { FunctionComponent, PropsWithChildren } from 'react';

export const BlockQuote: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <blockquote
      className={
        'border-l-4 border-primary-500 italic pl-4 ml-4 my-4 py-3 backdrop-blur-sm bg-background-box bg-opacity-60'
      }
    >
      {children}
    </blockquote>
  );
};
