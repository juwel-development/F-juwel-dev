import { ApplicationEventDispatcher } from 'Application/EventDispatcher/ApplicationEventDispatcher';
import { Container } from 'Presentation/Atom/Layout/Container';
import { Page } from 'Presentation/Atom/Layout/Page';
import { H1 } from 'Presentation/Atom/Typography/H1';
import { P } from 'Presentation/Atom/Typography/P';
import { useEffect } from 'react';
import { container } from 'tsyringe';

const SoftwareDevelopmentPage = () => {
  const applicationEventDispatcher = container.resolve(ApplicationEventDispatcher);

  useEffect(() => {
    void applicationEventDispatcher.pageVisited('SoftwareDevelopment');
  }, []);

  return (
    <Page>
      <Container>
        <H1>Software Development</H1>
        <P>We are a software development company that provides software development services to clients.</P>
      </Container>
    </Page>
  );
};

export default SoftwareDevelopmentPage;
