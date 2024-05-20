import { ApplicationEventDispatcher } from 'Application/EventDispatcher/ApplicationEventDispatcher';
import { FadeIn } from 'Presentation/Atom/Animation/FadeIn';
import { Container } from 'Presentation/Atom/Layout/Container';
import { Flex } from 'Presentation/Atom/Layout/Flex';
import { Page } from 'Presentation/Atom/Layout/Page';
import { Table } from 'Presentation/Atom/Table';
import { Tag } from 'Presentation/Atom/Tag';
import { ExternalLink } from 'Presentation/Atom/Typography/ExternalLink';
import { Italic } from 'Presentation/Atom/Typography/Italic';
import { P } from 'Presentation/Atom/Typography/P';
import { Strong } from 'Presentation/Atom/Typography/Strong';
import { ExternalLinkBox } from 'Presentation/Molecule/ExternalLinkBox';
import { FullScreenSection } from 'Presentation/Molecule/FullScreenSection';
import { useEffect } from 'react';
import { container } from 'tsyringe';

import jensi from './Jensi.webp';

const SoftwareDevelopmentPage = () => {
  const applicationEventDispatcher = container.resolve(ApplicationEventDispatcher);

  useEffect(() => {
    void applicationEventDispatcher.pageVisited('SoftwareDevelopment');
  }, []);

  return (
    <Page>
      <FadeIn duration={2} delay={1}>
        <div
          className="absolute top-64 right-0 w-96 h-1/2 -z-10 hidden lg:block rounded-l-3xl bg-cover"
          style={{ backgroundImage: `url(${jensi}` }}
        />
      </FadeIn>
      <FullScreenSection heading="Software Development">
        <Container>
          <FadeIn>
            <div className="lg:w-3/6 xl:w-4/6">
              <P size="2xl">
                <Strong>Hi, I am Jens and I craft software.</Strong>
              </P>
              <P>
                With several years of experience, I am able to build software, that is made for its user. I care about
                the users needs and your business goals. That&apos;s why I care about finding a scalable and
                maintainable solution.
              </P>
              <P>
                I am a fullstack developer, with a dedication to event based system. This can be reactive frontends or
                backend systems, that are ready for the cloud. I love to communicate with stakeholders, to understand
                the business and the software that you need for success.
              </P>
              <P>
                Also I love to create concepts and architectures, that are ready for the future. I love to document my
                approach based on industry standards and best practices. For example, I am a big fan of Confluence and
                the <ExternalLink href="https://c4model.com/">C4 model.</ExternalLink>
              </P>
            </div>
          </FadeIn>
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
                  <P>nuwork is dedicated to combine freedom and commitment for a people-centered work environment.</P>
                  <P>
                    Besides the development of the platform, I am responsible for the technical concept of a new product
                    called &quot;nutopia&quot; - a digital mountain landscape, where you can meet your colleagues and
                    motivate to reach your goals.
                  </P>
                  <P>We were able to design a solution based on React and Lottie Files for interactive animations.</P>
                  <P>
                    Also, we started to establish evidence based product development based on the book
                    &quot;Evidence-Guided: Creating High Impact Products in the Face of Uncertainty&quot; by Itamar
                    Gilad.
                  </P>
                  <Tag.Root>
                    <Tag.Item>StartUp</Tag.Item>
                    <Tag.Item>React</Tag.Item>
                    <Tag.Item>NodeJs</Tag.Item>
                    <Tag.Item>NestJs</Tag.Item>
                    <Tag.Item>PostgreSQL</Tag.Item>
                    <Tag.Item>Clean Architecture</Tag.Item>
                    <Tag.Item>AWS</Tag.Item>
                  </Tag.Root>
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
                    Have you ever wondered which biological footprint your food has? By collecting soil samples and DNA
                    sequencing, you are able to get a detailed insight into the nature-impact of your food.
                  </P>
                  <P>
                    Within one year we were able to develop a MVP, that is able to run the required bioinformatics
                    pipelines in the cloud.
                  </P>
                  <P>
                    We were a team of two developers and were responsible for the whole software development process. We
                    gathered requirements by stakeholders, designed the architecture, implemented the software and
                    deployed it to the cloud.
                  </P>
                  <Tag.Root>
                    <Tag.Item>StartUp</Tag.Item>
                    <Tag.Item>React</Tag.Item>
                    <Tag.Item>.Net Core</Tag.Item>
                    <Tag.Item>PostgreSQL</Tag.Item>
                    <Tag.Item>AWS</Tag.Item>
                    <Tag.Item>Clean Architecture</Tag.Item>
                    <Tag.Item>Domain Driven Design</Tag.Item>
                  </Tag.Root>
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
                    Due to the high traffic and long-running calculations, I was confronted with designing a highly
                    scalable solution together with a software architect. We decided to develop an event-based system
                    that would eventually allow homebuyers and planners to design their dream homes.
                  </P>
                  <P>
                    I was responsible for the CI/CD process to publish our internal nuget packages and Docker images to
                    JFrog Artifactory.
                  </P>
                  <Tag.Root>
                    <Tag.Item>React</Tag.Item>
                    <Tag.Item>CQRS</Tag.Item>
                    <Tag.Item>.Net Core</Tag.Item>
                    <Tag.Item>Apache Kafka</Tag.Item>
                    <Tag.Item>Revit</Tag.Item>
                    <Tag.Item>Clean Architecture</Tag.Item>
                    <Tag.Item>Domain Driven Design</Tag.Item>
                    <Tag.Item>Protobufs</Tag.Item>
                  </Tag.Root>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <P>
                    <Strong>HiCo Group</Strong>{' '}
                  </P>
                  <P>
                    <Italic>04/2017 - 11/2020</Italic>
                  </P>
                </Table.Cell>
                <Table.Cell>
                  <P>
                    <ExternalLink href="https://www.truechart.com/">TRUECHART</ExternalLink> is a chart solution, to
                    visualize business reports based on the IBCS standard.
                  </P>
                  <P>
                    We started to refactor our frontend to React. Also I worked in the backend, with the goal to
                    simplify the code. At the end I had the responsibility for porting TRUECHART4QlikView to our newly
                    created core chart-platform.
                  </P>
                  <Tag.Root>
                    <Tag.Item>React</Tag.Item>
                    <Tag.Item>Java</Tag.Item>
                    <Tag.Item>Hibernate</Tag.Item>
                    <Tag.Item>Ivy</Tag.Item>
                    <Tag.Item>SVG</Tag.Item>
                    <Tag.Item>TypeScript</Tag.Item>
                    <Tag.Item>MSSQL</Tag.Item>
                    <Tag.Item>MySQL</Tag.Item>
                  </Tag.Root>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Container>
      </FullScreenSection>
      <FullScreenSection heading="Social Media - Find me on the internet">
        <Container>
          <FadeIn>
            <Flex.Root justify="between">
              <Flex.Item>
                <ExternalLinkBox to="https://www.linkedin.com/in/jens-uwe-lössl">
                  <P align="center">LinkedIn</P>
                </ExternalLinkBox>
              </Flex.Item>
              <Flex.Item>
                <ExternalLinkBox to="https://github.com/juwel-dev">
                  <P align="center">Github</P>
                </ExternalLinkBox>
              </Flex.Item>
              <Flex.Item>
                <ExternalLinkBox to="https://www.npmjs.com/~juwel-dev">
                  <P align="center">npm</P>
                </ExternalLinkBox>
              </Flex.Item>
            </Flex.Root>
          </FadeIn>
        </Container>
      </FullScreenSection>
    </Page>
  );
};

export default SoftwareDevelopmentPage;
