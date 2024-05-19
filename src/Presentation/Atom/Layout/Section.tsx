import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

const sectionRoot = cva('w-full py-1 md:py-4 lg:py-12', {
  variants: {
    size: {
      full: 'h-full',
      screen: 'min-h-screen flex content-center justify-center',
    },
  },
});

const Root = forwardRef<HTMLElement, PropsWithChildren<VariantProps<typeof sectionRoot>>>(({ children, size }, ref) => {
  return (
    <section ref={ref} className={sectionRoot({ size })}>
      {children}
    </section>
  );
});

const SectionContent: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="m-auto w-full h-full flex items-center">{children}</div>;
};

export const Section = {
  Root,
  Content: SectionContent,
};
