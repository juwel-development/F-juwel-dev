import { FadeIn } from 'Presentation/Atom/Animation/FadeIn';
import { Container } from 'Presentation/Atom/Layout/Container';
import { Logo } from 'Presentation/Atom/Logo/Logo';
import { H1 } from 'Presentation/Atom/Typography/H1';
import type { FunctionComponent } from 'react';

const HomePage: FunctionComponent = () => {
  return (
    <Container>
      <FadeIn duration={1.5}>
        <Logo />
      </FadeIn>
      <FadeIn duration={1.5} delay={1}>
        <H1 align="center">Under construction</H1>
      </FadeIn>
    </Container>
  );
};

export default HomePage;
