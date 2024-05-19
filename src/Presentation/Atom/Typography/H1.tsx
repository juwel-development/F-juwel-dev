import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { fontVariant } from 'Presentation/Atom/Typography/fontVariant';
import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';

const style = cva('text-body-1 text-3xl md:text-6xl py-2 md:py-4', {
  variants: fontVariant,
});

export const H1 = forwardRef<HTMLHeadingElement, PropsWithChildren<VariantProps<typeof style>>>(
  ({ children, ...props }, ref) => (
    <h1 ref={ref} className={style(props)}>
      {children}
    </h1>
  ),
);
