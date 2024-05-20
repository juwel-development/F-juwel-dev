import { Logger } from '@juwel-development/beautiful-logger';
import { ScrollTopic } from 'Application/Topic/ScrollTopic';
import { FadeIn } from 'Presentation/Atom/Animation/FadeIn';
import { Container } from 'Presentation/Atom/Layout/Container';
import { Flex } from 'Presentation/Atom/Layout/Flex';
import { Section } from 'Presentation/Atom/Layout/Section';
import { H1 } from 'Presentation/Atom/Typography/H1';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { useLayoutEffect, useRef } from 'react';
import { debounceTime, filter, throttleTime } from 'rxjs';
import { container } from 'tsyringe';

interface IProps {
  heading?: string;
}

export const FullScreenSection: FunctionComponent<PropsWithChildren<IProps>> = ({ children, heading }) => {
  const scrollTopic = container.resolve(ScrollTopic);
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const subscription = scrollTopic.ScrollPositionY$.pipe(
      debounceTime(250),
      filter(({ y, direction }) => {
        if (!ref.current) return false;

        const element = ref.current;

        if (direction === 'down') {
          return element.offsetTop - y < 0.6 * window.innerHeight && element.offsetTop - y > 0;
        }

        return false;
      }),
      throttleTime(1000),
    ).subscribe((event) => {
      event.element.scrollTo({ top: ref.current!.offsetTop, behavior: 'smooth' });
      Logger.getLogger('FullScreenSection').debug(`Scrolling to section ${heading}`);
    });
    return () => subscription?.unsubscribe();
  }, [ref, scrollTopic]);

  return (
    <Section.Root size="screen" ref={ref}>
      <Flex.Root direction="column" width="full">
        {heading && (
          <Flex.Item>
            <Container>
              <FadeIn>
                <H1>{heading}</H1>
              </FadeIn>
            </Container>
          </Flex.Item>
        )}
        <Flex.Item grow flex items="center" width="full">
          <Section.Content>{children}</Section.Content>
        </Flex.Item>
      </Flex.Root>
    </Section.Root>
  );
};
