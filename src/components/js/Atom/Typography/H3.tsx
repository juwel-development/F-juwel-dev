import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { type PropsWithChildren, forwardRef } from 'react';
import { fontVariant } from './fontVariant';

const style = cva('text-xl md:text-3xl py-3 md:py-6', {
  variants: fontVariant,
  defaultVariants: {
    color: 'contrast',
  },
});

export const H3 = forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<VariantProps<typeof style>>
>(({ children, ...props }, ref) => (
  <h3 ref={ref} className={style(props)}>
    {children}
  </h3>
));
