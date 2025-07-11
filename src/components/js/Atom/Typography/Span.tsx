import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type PropsWithChildren } from 'react';
import { fontVariant } from './fontVariant.ts';

const style = cva('pb-4 pt-1 leading-relaxed', {
  variants: {
    ...fontVariant,
    size: { ...fontVariant.size, base: 'text-base md:text-lg' },
  },
  defaultVariants: { size: 'base', color: 'contrast' },
});

export const Span = forwardRef<
  HTMLParagraphElement,
  PropsWithChildren<VariantProps<typeof style>>
>(({ children, ...props }, ref) => (
  <span ref={ref} className={style(props)}>
    {children}
  </span>
));
