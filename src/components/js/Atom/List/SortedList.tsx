import { cva, type VariantProps } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { fontVariant } from '../Typography/fontVariant.ts';

const style = cva('pb-2 pt-1 leading-relaxed list-decimal list-inside', {
  variants: {
    ...fontVariant,
    size: { ...fontVariant.size, base: 'text-base md:text-lg' },
  },
  defaultVariants: { size: 'base', color: 'contrast' },
});

const SortedListRoot: FunctionComponent<
  PropsWithChildren<VariantProps<typeof style>>
> = ({ children, ...styleProps }) => {
  return <ol className={style(styleProps)}>{children}</ol>;
};

const ListItem: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <li className={'my-3'}>{children}</li>;
};

export const SortedList = {
  Root: SortedListRoot,
  Item: ListItem,
};
