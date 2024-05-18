import { Logger } from '@juwel-development/beautiful-logger';
import { useAction } from '@juwel-development/react-observable-tools';
import { Box } from 'Presentation/Atom/Layout/Box';
import { Flex } from 'Presentation/Atom/Layout/Flex';
import type { FunctionComponent, PropsWithChildren } from 'react';

interface IProps {
  path?: string;
}

export const LinkBox: FunctionComponent<PropsWithChildren<IProps>> = ({ children, path }) => {
  const onClick$ = useAction(() => {
    Logger.getLogger('LinkBox').info(`Clicked on LinkBox with path: ${path}`);
  });

  return (
    <Box outline={path ? 'hover' : undefined} onClick$={onClick$}>
      <Flex.Root direction="column" justify="center" items="center">
        <Flex.Item>{children}</Flex.Item>
      </Flex.Root>
    </Box>
  );
};
