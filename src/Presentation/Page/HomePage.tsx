import { useAction } from '@juwel-development/react-observable-tools';
import { ApplicationEventDispatcher } from 'Application/EventDispatcher/ApplicationEventDispatcher';
import { FadeIn } from 'Presentation/Atom/Animation/FadeIn';
import { Container } from 'Presentation/Atom/Layout/Container';
import { Flex } from 'Presentation/Atom/Layout/Flex';
import { Page } from 'Presentation/Atom/Layout/Page';
import { Logo } from 'Presentation/Atom/Logo/Logo';
import { H1 } from 'Presentation/Atom/Typography/H1';
import { P } from 'Presentation/Atom/Typography/P';
import { FullScreenSection } from 'Presentation/Molecule/FullScreenSection';
import { LinkBox } from 'Presentation/Molecule/LinkBox';
import { PATH } from 'Presentation/Routing/Path';
import type { FunctionComponent } from 'react';
import { useEffect } from 'react';
import { container } from 'tsyringe';

const HomePage: FunctionComponent = () => {
  const applicationEventDispatcher = container.resolve(ApplicationEventDispatcher);

  const redirect$ = useAction((param: string) => {
    void applicationEventDispatcher.redirectCommand(param);
  }, []);

  useEffect(() => {
    void applicationEventDispatcher.pageVisited('Home');
  }, []);

  return (
    <Page>
      <FullScreenSection>
        <Container>
          <FadeIn duration={1.5}>
            <Logo size="full" />
          </FadeIn>
          <FadeIn duration={2} delay={0.6}>
            <H1 align="center">
              I craft software
              <FadeIn delay={1.8} duration={0.4}>
                .
              </FadeIn>
            </H1>
          </FadeIn>
        </Container>
      </FullScreenSection>
      <FullScreenSection heading="What are you looking for?">
        <Flex.Root justify="between">
          <Flex.Item>
            <FadeIn duration={1.5} delay={0.2}>
              <LinkBox>
                <P align="center">software architecture </P>
                <P align="center">(coming soon)</P>
              </LinkBox>
            </FadeIn>
          </Flex.Item>
          <Flex.Item>
            <FadeIn duration={1.5} delay={0.6}>
              <LinkBox redirect$={redirect$} path={PATH.SOFTWARE_DEVELOPMENT}>
                <P align="center">software development</P>
              </LinkBox>
            </FadeIn>
          </Flex.Item>
          <Flex.Item>
            <FadeIn duration={1.5} delay={1}>
              <LinkBox>
                <P align="center">knowledge</P>
                <P align="center">(coming soon)</P>
              </LinkBox>
            </FadeIn>
          </Flex.Item>
        </Flex.Root>
      </FullScreenSection>
    </Page>
  );
};

export default HomePage;
