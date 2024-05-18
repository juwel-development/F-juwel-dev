import { Container } from 'Presentation/Atom/Layout/Container';
import { Flex } from 'Presentation/Atom/Layout/Flex';
import { Section } from 'Presentation/Atom/Layout/Section';
import { H1 } from 'Presentation/Atom/Typography/H1';
import type { FunctionComponent, PropsWithChildren } from 'react';

interface IProps {
  heading?: string;
}

export const FullScreenSection: FunctionComponent<PropsWithChildren<IProps>> = ({ children, heading }) => {
  return (
    <Section.Root size="screen">
      <Container>
        <Flex.Root direction="column">
          {heading && (
            <Flex.Item>
              {' '}
              <H1>{heading}</H1>
            </Flex.Item>
          )}
          <Flex.Item grow>
            <Section.Content>{children}</Section.Content>
          </Flex.Item>
        </Flex.Root>
      </Container>
    </Section.Root>
  );
};
