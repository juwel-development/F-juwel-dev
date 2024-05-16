import { FadeIn } from 'Presentation/Atom/Animation/FadeIn';
import { Box } from 'Presentation/Atom/Layout/Box';
import { Container } from 'Presentation/Atom/Layout/Container';
import { Grid } from 'Presentation/Atom/Layout/Grid';
import { Logo } from 'Presentation/Atom/Logo/Logo';
import { H1 } from 'Presentation/Atom/Typography/H1';
import { FullScreenSection } from 'Presentation/Molecule/FullScreenSection';
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
      <FullScreenSection>
        <Container>
          <H1>What are you looking for?</H1>
          <Grid>
            <FadeIn duration={2} delay={0.2}>
              <Box>software architecture</Box>
            </FadeIn>
            <FadeIn duration={2} delay={0.8}>
              <Box>software development</Box>
            </FadeIn>
            <FadeIn duration={2} delay={1.4}>
              <Box>knowledge</Box>
            </FadeIn>
          </Grid>
        </Container>
      </FullScreenSection>
    </div>
  );
};

export default HomePage;
