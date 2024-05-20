import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { fontVariant } from 'Presentation/Atom/Typography/fontVariant';
import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';

const style = cva('text-body-1 pb-3 pt-1 ', {
  variants: { ...fontVariant, size: { ...fontVariant.size, base: 'text-base md:text-lg' } },
  defaultVariants: { size: 'base' },
});

export const P = forwardRef<HTMLParagraphElement, PropsWithChildren<VariantProps<typeof style>>>(
  ({ children, ...props }, ref) => (
    <p ref={ref} className={style(props)}>
      {children}
    </p>
  ),
);
