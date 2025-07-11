import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { forwardRef, type PropsWithChildren } from 'react';
import { fontVariant } from './fontVariant';

const style = cva('text-lg md:text-2xl py-2 md:py-4', {
  variants: fontVariant,
  defaultVariants: {
    color: 'contrast',
  },
});

export const H4 = forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<VariantProps<typeof style>>
>(({ children, color = 'primary', ...props }, ref) => (
  <h4 ref={ref} className={style({ ...props, color })}>
    {children}
  </h4>
));
