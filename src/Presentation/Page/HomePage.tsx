import { FadeIn } from 'Presentation/Atom/Animation/FadeIn';
import { Box } from 'Presentation/Atom/Layout/Box';
import { Container } from 'Presentation/Atom/Layout/Container';
import { Grid } from 'Presentation/Atom/Layout/Grid';
import { Section } from 'Presentation/Atom/Layout/Section';
import { Logo } from 'Presentation/Atom/Logo/Logo';
import { H1 } from 'Presentation/Atom/Typography/H1';
import type { FunctionComponent } from 'react';

import bg from './bg.png';

const HomePage: FunctionComponent = () => {
  return (
    <div
      className="absolute top-0 bottom-0 right-0 left-0 bg-repeat -z-10 select-none overflow-auto"
      style={{ backgroundImage: `url(${bg}` }}
    >
      <Section.Root size="screen">
        <Container>
          <FadeIn duration={1.5}>
            <Logo size="full" />
          </FadeIn>
          <FadeIn duration={2} delay={0.6}>
            <H1 align="center">
              I craft software
              <FadeIn delay={1.6} duration={0.4}>
                .
              </FadeIn>
            </H1>
          </FadeIn>
        </Container>
      </Section.Root>
      <Section.Root size="screen">
        <Container>
          <H1>What are you looking for?</H1>
          <Grid>
            <FadeIn duration={2} delay={0.2}>
              <Box>a software architect</Box>
            </FadeIn>
            <FadeIn duration={2} delay={0.8}>
              <Box>a full-stack developer</Box>
            </FadeIn>
            <FadeIn duration={2} delay={1.4}>
              <Box>inspirational knowledge</Box>
            </FadeIn>
          </Grid>
        </Container>
      </Section.Root>
    </div>
  );
};

export default HomePage;
