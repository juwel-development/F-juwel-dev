import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { forwardRef, type PropsWithChildren } from 'react';
import { fontVariant } from './fontVariant';

const style = cva('text-xl md:text-4xl py-2 md:py-4', {
  variants: fontVariant,
  defaultVariants: {
    color: 'contrast'
  }
});

export const H2 = forwardRef<HTMLHeadingElement, PropsWithChildren<VariantProps<typeof style>>>(
  ({ children, ...props }, ref) => (
    <h2 ref={ref} className={style(props)}>
      {children}
    </h2>
  )
);
