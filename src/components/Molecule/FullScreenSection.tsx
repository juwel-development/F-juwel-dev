import type { FunctionComponent, PropsWithChildren } from 'react';
import { Container } from '../../components/Atom/Layout/Container.tsx';
import { Flex } from '../../components/Atom/Layout/Flex.tsx';
import { Section } from '../../components/Atom/Layout/Section.tsx';
import { H1 } from '../../components/Atom/Typography/H1.tsx';

interface IProps {
  heading?: string;
}

export const FullScreenSection: FunctionComponent<PropsWithChildren<IProps>> = ({ children, heading }) => {
  return (
    <Section.Root size="screen">
      <Flex.Root direction="column" width="full">
        {heading && (
          <Flex.Item>
            <Container>
              <H1>{heading}</H1>
            </Container>
          </Flex.Item>
        )}
        <Flex.Item grow flex items="center" width="full">
          <Section.Content>{children}</Section.Content>
        </Flex.Item>
      </Flex.Root>
    </Section.Root>
  );
};
