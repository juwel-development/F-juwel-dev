import { FadeIn } from 'Presentation/Atom/Animation/FadeIn';
import { Box } from 'Presentation/Atom/Layout/Box';
import { Container } from 'Presentation/Atom/Layout/Container';
import { Grid } from 'Presentation/Atom/Layout/Grid';
import { Logo } from 'Presentation/Atom/Logo/Logo';
import { H1 } from 'Presentation/Atom/Typography/H1';
import type { FunctionComponent } from 'react';

import bg from './bg.png';

const HomePage: FunctionComponent = () => {
  return (
    <>
      <div className="w-screen h-screen bg-repeat -z-10" style={{ backgroundImage: `url(${bg}` }}>
        <Container>
          <FadeIn duration={1.5}>
            <Logo />
          </FadeIn>
          <FadeIn duration={1.5} delay={1}>
            <H1 align="center">We build software</H1>
            <H1 align="center">Under construction</H1>
          </FadeIn>
          {/*<Grid>*/}
          {/*  <Box>Software development</Box>*/}
          {/*  <Box>Software architecture</Box>*/}
          {/*</Grid>*/}
        </Container>
      </div>
    </>
  );
};

export default HomePage;
