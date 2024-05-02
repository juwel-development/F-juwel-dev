import type { VariantProps } from 'class-variance-authority';
import type { fontVariant } from 'Presentation/Atom/Typography/fontVariant';
import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';

export const H1 = forwardRef<HTMLHeadingElement, PropsWithChildren<VariantProps<typeof fontVariant>>>(
  ({ children, ...props }, ref) => (
    <h1 ref={ref} {...props} className="text-body-1">
      {children}
    </h1>
  ),
);
