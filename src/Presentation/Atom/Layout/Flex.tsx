import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';

const flexRoot = cva('flex gap-6', {
  variants: {
    direction: {
      row: 'flex-row w-full',
      column: 'flex-col h-full',
    },
    wrap: {
      wrap: 'flex-wrap',
      nowrap: 'flex-nowrap',
      reverse: 'flex-wrap-reverse',
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
}) => {
  return <div className={flexRoot({ direction, wrap, justify })}>{children}</div>;
};

const flexItem = cva('', {
  variants: {
    grow: {
      true: 'grow',
    },
  },
  defaultVariants: {
    grow: false,
  },
});

const FlexItem: FunctionComponent<PropsWithChildren<VariantProps<typeof flexItem>>> = ({ children, grow }) => {
  return <div className={flexItem({ grow })}>{children}</div>;
};

export const Flex = {
  Root: FlexRoot,
  Item: FlexItem,
};
