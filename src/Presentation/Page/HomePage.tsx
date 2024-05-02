import { Container } from 'Presentation/Atom/Layout/Container';
import { Logo } from 'Presentation/Atom/Logo/Logo';
import { H1 } from 'Presentation/Atom/Typography/H1';
import type { FunctionComponent } from 'react';

const HomePage: FunctionComponent = () => {
  return (
    <Container>
      <Logo />
      <H1 align="center">Under construction</H1>
    </Container>
  );
};

export default HomePage;
