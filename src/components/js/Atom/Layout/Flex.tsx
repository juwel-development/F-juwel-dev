import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';

const flexRoot = cva('flex gap-6 max-w-full', {
  variants: {
    direction: {
      row: 'flex-row w-full',
      column: 'flex-col min-h-full',
    },
    wrap: {
      wrap: 'flex-wrap',
      nowrap: 'flex-nowrap',
      reverse: 'flex-wrap-reverse',
    },
    items: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      stretch: 'items-stretch',
    },
    justify: {
      normal: 'justify-normal',
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
    },
    width: {
      full: 'w-full',
    },
  },
  defaultVariants: {
    direction: 'row',
    wrap: 'wrap',
    justify: 'normal',
  },
});

const FlexRoot: FunctionComponent<
  PropsWithChildren<VariantProps<typeof flexRoot>>
> = ({ children, direction, wrap, justify, items, width }) => {
  return (
    <div className={flexRoot({ direction, wrap, justify, items, width })}>
      {children}
    </div>
  );
};

const flexItem = cva('max-w-full', {
  variants: {
    grow: {
      true: 'grow',
    },
    flex: {
      true: 'flex',
    },
    items: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      stretch: 'items-stretch',
    },
    width: {
      full: 'w-full',
    },
  },
  defaultVariants: {
    grow: false,
    flex: false,
    items: 'start',
  },
});

const FlexItem: FunctionComponent<
  PropsWithChildren<VariantProps<typeof flexItem>>
> = ({ children, grow, flex, width }) => {
  return <div className={flexItem({ grow, flex, width })}>{children}</div>;
};

export const Flex = {
  Root: FlexRoot,
  Item: FlexItem,
};
