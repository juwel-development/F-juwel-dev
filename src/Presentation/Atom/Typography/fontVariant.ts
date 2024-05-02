import { cva } from 'class-variance-authority';

export const fontVariant = cva('', {
  variants: {
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
  },
});
