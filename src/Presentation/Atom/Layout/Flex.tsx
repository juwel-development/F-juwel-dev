import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';

const flexRoot = cva('flex gap-6', {
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
  },
  defaultVariants: {
    direction: 'row',
    wrap: 'wrap',
    justify: 'normal',
  },
});

const FlexRoot: FunctionComponent<PropsWithChildren<VariantProps<typeof flexRoot>>> = ({
  children,
  direction,
  wrap,
  justify,
  items,
}) => {
  return <div className={flexRoot({ direction, wrap, justify, items })}>{children}</div>;
};

const flexItem = cva('', {
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
  },
  defaultVariants: {
    grow: false,
    flex: false,
    items: 'start',
  },
});

const FlexItem: FunctionComponent<PropsWithChildren<VariantProps<typeof flexItem>>> = ({ children, grow, flex }) => {
  return <div className={flexItem({ grow, flex })}>{children}</div>;
};

export const Flex = {
  Root: FlexRoot,
  Item: FlexItem,
};
