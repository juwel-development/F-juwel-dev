import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';
import type { Subject } from 'rxjs';

const box = cva('w-64 h-32 bg-background-box rounded-lg shadow p-3 bg-opacity-60', {
  variants: {
    outline: {
      true: 'outline outline-4 outline-primary-500',
      hover: 'hover:outline hover:outline-4 hover:outline-primary-500',
    },
  },
  defaultVariants: {
    outline: false,
  },
});

type Props = PropsWithChildren<VariantProps<typeof box>> & { onClick$?: Subject<void> };

export const Box: FunctionComponent<Props> = ({ children, outline, onClick$ }) => {
  return (
    <div className={box({ outline })} onClick={() => onClick$?.next()}>
      {children}
    </div>
  );
};
