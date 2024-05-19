import type { FunctionComponent, PropsWithChildren } from 'react';

interface IProps {
  href: string;
}

export const ExternalLink: FunctionComponent<PropsWithChildren<IProps>> = ({ children, href }) => {
  return (
    <a href={href} target="_blank" className="underline" rel="noreferrer">
      {children}
    </a>
  );
};
