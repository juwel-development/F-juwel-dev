import { Box } from 'Presentation/Atom/Layout/Box';
import { Flex } from 'Presentation/Atom/Layout/Flex';
import type { FunctionComponent, PropsWithChildren } from 'react';

interface IProps {
  path?: string;
}

export const LinkBox: FunctionComponent<PropsWithChildren<IProps>> = ({ children, path }) => {
  return (
    <Box outline={path ? 'hover' : undefined}>
      <Flex.Root direction="column" justify="center" items="center">
        <Flex.Item>{children}</Flex.Item>
      </Flex.Root>
    </Box>
  );
};
