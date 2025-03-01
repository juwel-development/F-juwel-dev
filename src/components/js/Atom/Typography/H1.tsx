import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { fontVariant } from './fontVariant';

const style = cva('text-body-1 py-3 md:py-6', {
  variants: fontVariant,
  defaultVariants: {
    size: '6xl',
  },
});

export const H1 = forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<VariantProps<typeof style>>
>(({ children, color = 'primary', ...props }, ref) => (
  <h1 ref={ref} className={style({ ...props, color })}>
    {children}
  </h1>
));
