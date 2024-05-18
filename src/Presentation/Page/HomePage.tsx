import { FadeIn } from 'Presentation/Atom/Animation/FadeIn';
import { Container } from 'Presentation/Atom/Layout/Container';
import { Flex } from 'Presentation/Atom/Layout/Flex';
import { Logo } from 'Presentation/Atom/Logo/Logo';
import { H1 } from 'Presentation/Atom/Typography/H1';
import { FullScreenSection } from 'Presentation/Molecule/FullScreenSection';
import { LinkBox } from 'Presentation/Molecule/LinkBox';
import type { FunctionComponent } from 'react';

import bg from './bg.png';

const HomePage: FunctionComponent = () => {
  return (
    <div
      className="absolute top-0 bottom-0 right-0 left-0 bg-repeat -z-10 select-none overflow-auto"
      style={{ backgroundImage: `url(${bg}` }}
    >
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
              <LinkBox>software architecture</LinkBox>
            </FadeIn>
          </Flex.Item>
          <Flex.Item>
            <FadeIn duration={1.5} delay={0.6}>
              <LinkBox>software development</LinkBox>
            </FadeIn>
          </Flex.Item>
          <Flex.Item>
            <FadeIn duration={1.5} delay={1}>
              <LinkBox>knowledge</LinkBox>
            </FadeIn>
          </Flex.Item>
        </Flex.Root>
      </FullScreenSection>
    </div>
  );
};

export default HomePage;
