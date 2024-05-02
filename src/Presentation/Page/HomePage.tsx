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
    <>
      <div
        className="absolute top-0 bottom-0 right-0 left-0 bg-repeat -z-10 select-none overflow-auto"
        style={{ backgroundImage: `url(${bg}` }}
      >
        <Container>
          <Section>
            <FadeIn duration={1.5}>
              <Logo />
            </FadeIn>
            <FadeIn duration={2} delay={0.6}>
              <H1 align="center">I craft software</H1>
            </FadeIn>
          </Section>
          <Section>
            <Grid>
              <FadeIn duration={2} delay={1.2}>
                <Box>Previous projects</Box>
              </FadeIn>
              <FadeIn duration={2} delay={1.5}>
                <Box>Knowledge</Box>
              </FadeIn>
              <FadeIn duration={2} delay={1.8}>
                <Box>About me</Box>
              </FadeIn>
            </Grid>
          </Section>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
