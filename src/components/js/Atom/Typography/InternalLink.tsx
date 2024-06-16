import { cva } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { fontVariant } from './fontVariant.ts';

interface IProps {
  to: string;
}

const linkStyle = cva('underline', {
  variants: fontVariant,
  defaultVariants: {
    color: 'contrast',
  },
});

export const InternalLink: FunctionComponent<PropsWithChildren<IProps>> = ({
  children,
  to,
}) => {
  return (
    <a className={linkStyle()} href={to}>
      {children}
    </a>
  );
};
