import { Box } from 'Presentation/Atom/Layout/Box';
import type { FunctionComponent, PropsWithChildren } from 'react';

interface IProps {}

export const LinkBox: FunctionComponent<PropsWithChildren<IProps>> = ({ children }) => {
  return <Box>{children}</Box>;
};
