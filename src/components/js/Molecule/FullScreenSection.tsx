import type { FunctionComponent, PropsWithChildren } from 'react';
import { Container } from '../Atom/Layout/Container.tsx';
import { Section } from '../Atom/Layout/Section.tsx';
import { Flex } from '../Atom/Layout/Flex';
import { H1 } from '../Atom/Typography/H1.tsx';


interface IProps {
  heading?: string;
  anchor?: string;
}

export const FullScreenSection: FunctionComponent<PropsWithChildren<IProps>> = ({ children, heading, anchor }) => {
  return (
    <Section.Root size="screen">
      {anchor && <a id={anchor}></a>}
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
