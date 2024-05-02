import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';

const sectionRoot = cva('w-full py-1 md:py-2 lg:py-6', {
  variants: {
    size: {
      full: 'h-full',
      screen: 'h-screen flex content-center justify-center',
    },
  },
});

const Root: FunctionComponent<PropsWithChildren<VariantProps<typeof sectionRoot>>> = ({ children, size }) => {
  return <section className={sectionRoot({ size })}>{children}</section>;
};

const SectionContent: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="m-auto">{children}</div>;
};

export const Section = {
  Root,
  Content: SectionContent,
};
