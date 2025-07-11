import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { forwardRef, type PropsWithChildren } from 'react';
import { fontVariant } from './fontVariant';

const style = cva('text-2xl md:text-5xl py-3 md:py-6', {
  variants: fontVariant,
  defaultVariants: {
    color: 'contrast',
  },
});

export const H2 = forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<VariantProps<typeof style>>
>(({ children, color = 'primary', ...props }, ref) => (
  <h2 ref={ref} className={style({ ...props, color })}>
    {children}
  </h2>
));
