import { cva, type VariantProps } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { fontVariant } from '../Typography/fontVariant.ts';

const style = cva('pb-2 pt-1 leading-relaxed list-disc list-inside', {
  variants: {
    ...fontVariant,
    size: { ...fontVariant.size, base: 'text-base md:text-lg' },
  },
  defaultVariants: { size: 'base', color: 'contrast' },
});

const UnsortedListRoot: FunctionComponent<
  PropsWithChildren<VariantProps<typeof style>>
> = ({ children, ...styleProps }) => {
  return <ul className={style(styleProps)}>{children}</ul>;
};

const ListItem: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <li className={'my-3'}>{children}</li>;
};

export const UnsortedList = {
  Root: UnsortedListRoot,
  Item: ListItem,
};
