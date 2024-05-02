import { motion, MotionConfig } from 'framer-motion';
import type { FunctionComponent, PropsWithChildren } from 'react';

interface IProps {
  /* delay in sec */
  delay?: number;
  /* duration in sec */
  duration?: number;
}

export const FadeIn: FunctionComponent<PropsWithChildren<IProps>> = ({ children, delay = 0, duration = 0.5 }) => {
  return (
    <MotionConfig transition={{ duration, delay }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {children}
      </motion.div>
    </MotionConfig>
  );
};
