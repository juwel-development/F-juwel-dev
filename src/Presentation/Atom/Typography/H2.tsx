import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { fontVariant } from 'Presentation/Atom/Typography/fontVariant';
import { forwardRef, type PropsWithChildren } from 'react';

const style = cva('text-body-1 text-xl md:text-4xl py-2 md:py-4', {
  variants: fontVariant,
});

export const H2 = forwardRef<HTMLHeadingElement, PropsWithChildren<VariantProps<typeof style>>>(
  ({ children, ...props }, ref) => (
    <h2 ref={ref} className={style(props)}>
      {children}
    </h2>
  ),
);
