import { ApplicationEventDispatcher } from 'Application/EventDispatcher/ApplicationEventDispatcher';
import { Container } from 'Presentation/Atom/Layout/Container';
import { Page } from 'Presentation/Atom/Layout/Page';
import { Table } from 'Presentation/Atom/Table';
import { ExternalLink } from 'Presentation/Atom/Typography/ExternalLink';
import { H2 } from 'Presentation/Atom/Typography/H2';
import { Italic } from 'Presentation/Atom/Typography/Italic';
import { P } from 'Presentation/Atom/Typography/P';
import { Strong } from 'Presentation/Atom/Typography/Strong';
import { FullScreenSection } from 'Presentation/Molecule/FullScreenSection';
import { useEffect } from 'react';
import { container } from 'tsyringe';

const SoftwareDevelopmentPage = () => {
  const applicationEventDispatcher = container.resolve(ApplicationEventDispatcher);

  useEffect(() => {
    void applicationEventDispatcher.pageVisited('SoftwareDevelopment');
  }, []);

  return (
    <Page>
      <FullScreenSection heading="Software Development">
        <Container>
          <P>Hi, I am Jens and I craft software.</P>
          <P>
            With several years of experience, I am able to build software, that is made for its user. I care about the
            users needs and your business goals. That&apos;s why I care about finding a scalable and maintainable
            solution.
          </P>
          <P>
            I am a fullstack developer, with a dedication to event based system. This can be reactive frontends or
            backend systems, that are ready for the cloud. I love to communicate with stakeholders, to understand the
            business and the software that you need for success.
          </P>
          <P>
            Also I love to create concepts and architectures, that are ready for the future. I love to document my
            approach based on industry standards and best practices. For example, I am a big fan of Confluence and the{' '}
            <ExternalLink href="https://c4model.com/">C4 model.</ExternalLink>
          </P>
        </Container>
      </FullScreenSection>
      <FullScreenSection heading="Projects">
        <Container>
          <Table.Root>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <P>
                    <Strong>nuwork</Strong>
                  </P>
                  <P>
                    <Italic>09/2023 - now</Italic>
                  </P>
                </Table.Cell>
                <Table.Cell>
                  <P>
                    [StartUp] With nuwork, we create the work culture of tomorrow. Reaching a goal is a tough and
                    winding road sometimes. That why our software will motivate people to contribute to company and team
                    goals.
                  </P>
                  <P>We combine freedom and commitment in a people-centered work environment.</P>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <P>
                    <Strong>spcfy</Strong>
                  </P>
                  <P>
                    <Italic>08/2022 - 07/2023</Italic>
                  </P>
                </Table.Cell>
                <Table.Cell>
                  <P>
                    [StartUp] Have you ever wondered which biological footprint your food has? spcfy is a solution that
                    will give you answers. Based on DNA found in a soil sample, spcfy can determine species and
                    biodiversity. This makes the impact of agriculture on the ecosystem measurable.
                  </P>
                  <P>
                    This startup was in an early stage - so with a very tight budget - we as a 2 men IT team had to
                    fulfill all the responsibilities of a whole IT department. This includes DevOps, Frontend and
                    Backend Development, but also requirements engineering and being involved in product development.
                    After 1 year of development, we were able to hand over a scalable cloud solution, that runs a
                    bioinformatic pipeline via AWS Lambda, AWS Step Functions, and AWS Batch.
                  </P>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <P>
                    <Strong>Town & Country Haus</Strong>
                  </P>
                  <P>
                    <Italic>12/2020 - 07/2022</Italic>
                  </P>
                </Table.Cell>
                <Table.Cell>
                  <P>
                    The main task at Town&Country was to digitalize the construction industry based on the BIM approach.
                  </P>
                  <P>
                    Due to the high traffic and long-running calculations, I was confronted for the first time with
                    designing a highly scalable solution together with a software architect. We decided to develop an
                    event-based system that would eventually allow homebuyers and planners to design their dream homes.
                  </P>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <P>
                    <Strong>HiCo Group</Strong> <ExternalLink href="https://www.truechart.com/">TRUECHART</ExternalLink>
                  </P>
                  <P>
                    <Italic>04/2017 - 11/2020</Italic>
                  </P>
                </Table.Cell>
                <Table.Cell>
                  <P>
                    TRUECHART is a chart solution, to visualize business reports based on the IBCS standard. We as a
                    growing software team inherited a large code base, which we simplified by introducing React and
                    refactorings in the Java backend.
                  </P>
                  <P>
                    During this time I fell in love with Java as a backend language, which was a huge part of our
                    commenting solution. By also providing the commenting API via Sockets we were able to build the
                    foundation of the product KPICHAT.
                  </P>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Container>
      </FullScreenSection>
    </Page>
  );
};

export default SoftwareDevelopmentPage;
