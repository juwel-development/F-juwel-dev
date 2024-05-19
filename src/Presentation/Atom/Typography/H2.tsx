import type { VariantProps } from 'class-variance-authority';
import type { fontVariant } from 'Presentation/Atom/Typography/fontVariant';
import { forwardRef, type PropsWithChildren } from 'react';

export const H2 = forwardRef<HTMLHeadingElement, PropsWithChildren<VariantProps<typeof fontVariant>>>(
  ({ children, ...props }, ref) => (
    <h1 ref={ref} {...props} className="text-body-1 text-xl md:text-4xl py-2 md:py-4">
      {children}
    </h1>
  ),
);
