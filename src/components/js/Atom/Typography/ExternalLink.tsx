import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';

const externalLink = cva('', {
  variants: {
    underline: {
      true: 'underline',
      false: '',
    },
  },
  defaultVariants: {
    underline: true,
  },
});

interface IProps {
  href: string;
}

export const ExternalLink: FunctionComponent<PropsWithChildren<IProps & VariantProps<typeof externalLink>>> = ({
  children,
  href,
  underline,
}) => {
  return (
    <a href={href} target="_blank" className={externalLink({ underline })} rel="noreferrer">
      {children}
    </a>
  );
};
