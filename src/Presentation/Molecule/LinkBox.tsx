import { Logger } from '@juwel-development/beautiful-logger';
import { useAction } from '@juwel-development/react-observable-tools';
import { Box } from 'Presentation/Atom/Layout/Box';
import { Flex } from 'Presentation/Atom/Layout/Flex';
import type { FunctionComponent, PropsWithChildren } from 'react';
import type { Subject } from 'rxjs';

interface IProps {
  path?: string;
  redirect$?: Subject<string>;
}

export const LinkBox: FunctionComponent<PropsWithChildren<IProps>> = ({ children, path, redirect$ }) => {
  const onClick$ = useAction(() => {
    path && redirect$?.next(path);
  });

  return (
    <Box outline={path ? 'hover' : undefined} onClick$={onClick$}>
      <Flex.Root direction="column" justify="center" items="center">
        <Flex.Item>{children}</Flex.Item>
      </Flex.Root>
    </Box>
  );
};
