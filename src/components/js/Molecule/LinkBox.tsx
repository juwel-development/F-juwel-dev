import { Box } from '../Atom/Layout/Box';
import { Flex } from '../Atom/Layout/Flex.tsx';
import { type FunctionComponent, memo, type PropsWithChildren } from 'react';

export const LinkBox: FunctionComponent<PropsWithChildren<{ to?: string }>> = ({ children, to }) => {

  const Component = memo(() => (<Box outline={to ? 'hover' : undefined}>
    <Flex.Root direction="column" justify="center" items="center">
      <Flex.Item>{children}</Flex.Item>
    </Flex.Root>
  </Box>));

  if (to) {
    return <a href={to} data-astro-prefetch="viewport"><Component /></a>;
  }
  return <Component />;
};
