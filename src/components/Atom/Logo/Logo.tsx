import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { FunctionComponent } from 'react';


const logoVariants = cva('pointer-events-none', {
  variants: {
    size: {
      small: 'w-16 h-16',
      medium: 'w-24 h-24',
      large: 'w-32 h-32',
      full: 'w-screen -mt-12 md:-mt-16 lg:-mt-24'
    }
  }
});

export const Logo: FunctionComponent<VariantProps<typeof logoVariants>> = ({ size }) => {
  return <img className={logoVariants({ size })} src="/img/logo.svg" alt="logo juwel development" />;
};
