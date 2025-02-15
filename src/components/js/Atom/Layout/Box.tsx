import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';

const box = cva(
  'w-64 h-32 bg-background-box rounded-lg shadow p-3 bg-opacity-60 motion-translate-y-in-[0%] motion-translate-x-in-[-5%] motion-opacity-in-[0%] motion-blur-in-[3px] motion-duration-[0.80s]/opacity motion-duration-[0.8s]/blur',
  {
    variants: {
      outline: {
        true: 'outline outline-4 outline-primary-500',
        hover: 'hover:outline hover:outline-4 hover:outline-primary-500',
      },
    },
    defaultVariants: {
      outline: false,
    },
  },
);

type Props = PropsWithChildren<VariantProps<typeof box>>;

export const Box: FunctionComponent<Props> = ({ children, outline }) => {
  return <div className={box({ outline })}>{children}</div>;
};
