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
      <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline">
        {children}
      </motion.span>
    </MotionConfig>
  );
};
