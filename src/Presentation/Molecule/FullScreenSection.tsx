import { Section } from 'Presentation/Atom/Layout/Section';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const FullScreenSection: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <Section.Root size="screen">{children}</Section.Root>;
};
