import { Link } from '@tanstack/react-router';
import type { FunctionComponent, PropsWithChildren } from 'react';

interface IProps {
  to: string;
}

export const InternalLink: FunctionComponent<PropsWithChildren<IProps>> = ({ children, to }) => {
  return (
    <Link className="underline" to={to}>
      {children}
    </Link>
  );
};
