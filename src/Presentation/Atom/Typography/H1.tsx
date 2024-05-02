import type { VariantProps } from 'class-variance-authority';
import type { fontVariant } from 'Presentation/Atom/Typography/fontVariant';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const H1: FunctionComponent<PropsWithChildren<VariantProps<typeof fontVariant>>> = ({ children, ...props }) => (
  <h1 {...props} className="text-body-1">
    {children}
  </h1>
);
