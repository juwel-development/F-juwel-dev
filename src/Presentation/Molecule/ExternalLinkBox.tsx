import { Box } from 'Presentation/Atom/Layout/Box';
import { Flex } from 'Presentation/Atom/Layout/Flex';
import { ExternalLink } from 'Presentation/Atom/Typography/ExternalLink';
import type { FunctionComponent, PropsWithChildren } from 'react';

interface IProps {
  to: string;
}
export const ExternalLinkBox: FunctionComponent<PropsWithChildren<IProps>> = ({ children, to }) => {
  return (
    <ExternalLink href={to} underline={false}>
      <Box outline="hover">
        <Flex.Root direction="column" justify="center" items="center">
          <Flex.Item>{children}</Flex.Item>
        </Flex.Root>
      </Box>
    </ExternalLink>
  );
};
