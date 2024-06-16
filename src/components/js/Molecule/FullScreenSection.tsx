import type { FunctionComponent, PropsWithChildren } from 'react';
import { Container } from '../Atom/Layout/Container.tsx';
import { Flex } from '../Atom/Layout/Flex';
import { Section } from '../Atom/Layout/Section.tsx';
import { H1 } from '../Atom/Typography';

interface IProps {
  heading?: string;
  anchor?: string;
}

export const FullScreenSection: FunctionComponent<
  PropsWithChildren<IProps>
> = ({ children, heading, anchor }) => {
  return (
    <Section.Root size="screen">
      {/* biome-ignore lint/a11y/useValidAnchor: this is a element that can be scrolled to */}
      {/* biome-ignore lint/a11y/useAnchorContent: this is a element that can be scrolled to */}
      {/* biome-ignore lint/a11y/noAriaHiddenOnFocusable: <explanation> */}
      {anchor && <a id={anchor} aria-hidden={true} title={anchor} />}
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
