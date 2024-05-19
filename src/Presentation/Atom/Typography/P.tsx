import type { VariantProps } from 'class-variance-authority';
import type { fontVariant } from 'Presentation/Atom/Typography/fontVariant';
import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';

export const P = forwardRef<HTMLParagraphElement, PropsWithChildren<VariantProps<typeof fontVariant>>>(
  ({ children, ...props }, ref) => (
    <p ref={ref} {...props} className="text-body-1 pb-3 pt-1">
      {children}
    </p>
  ),
);
