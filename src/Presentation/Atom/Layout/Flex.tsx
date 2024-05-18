import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';

const flexRoot = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row w-full',
      column: 'flex-col h-full',
    },
  },
  defaultVariants: {
    direction: 'row',
  },
});

const FlexRoot: FunctionComponent<PropsWithChildren<VariantProps<typeof flexRoot>>> = ({ children, direction }) => {
  return <div className={flexRoot({ direction })}>{children}</div>;
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
