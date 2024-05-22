import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { fontVariant } from './fontVariant';

const style = cva('text-body-1 text-3xl md:text-6xl py-3 md:py-6', {
  variants: fontVariant
});

export const H1 = forwardRef<HTMLHeadingElement, PropsWithChildren<VariantProps<typeof style>>>(
  ({ children, ...props }, ref) => (
    <h1 ref={ref} className={style(props)}>
      {children}
    </h1>
  )
);
