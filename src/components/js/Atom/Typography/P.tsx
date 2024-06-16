import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { fontVariant } from './fontVariant';

const style = cva('pb-4 pt-1 leading-relaxed', {
  variants: {
    ...fontVariant,
    size: { ...fontVariant.size, base: 'text-base md:text-lg' },
  },
  defaultVariants: { size: 'base', color: 'contrast' },
});

export const P = forwardRef<
  HTMLParagraphElement,
  PropsWithChildren<VariantProps<typeof style>>
>(({ children, ...props }, ref) => (
  <p ref={ref} className={style(props)}>
    {children}
  </p>
));
