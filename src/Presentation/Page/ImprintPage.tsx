import { Container } from 'Presentation/Atom/Layout/Container';
import { Page } from 'Presentation/Atom/Layout/Page';
import { H2 } from 'Presentation/Atom/Typography/H2';
import { P } from 'Presentation/Atom/Typography/P';
import { FullScreenSection } from 'Presentation/Molecule/FullScreenSection';
import type { FunctionComponent } from 'react';

const ImprintPage: FunctionComponent = () => {
  return (
    <Page>
      <FullScreenSection heading="Imprint">
        <Container>
          <P>
            This website is operated by:
            <br />
            <br />
            Jens-Uwe Lössl
            <br />
            Lange Str. 27
            <br />
            04103 Leipzig
            <br />
            Germany
            <br />
            <br />
            Email: impressum@jens-uwe-loessl.de
            <br />
            Phone: +49 152 52 967 837
          </P>
          <H2>Dispute Resolution</H2>
          <P>
            The European Commission provides a platform for online dispute resolution, which you can find at
            http://ec.europa.eu/consumers/odr. We are neither obligated nor willing to participate in a dispute
            resolution procedure before a consumer arbitration board.
          </P>
          <H2>Disclaimer</H2>
          <P>
            Our website contains links to external websites of third parties, on whose contents we have no influence.
            Therefore, we cannot assume any liability for these external contents. The respective provider or operator
            of the linked sites is always responsible for the contents of these sites. The linked sites were checked for
            possible legal violations at the time of linking. Illegal contents were not recognizable at the time of
            linking.
          </P>
          <P>
            A permanent control of the linked sites is, however, unreasonable without concrete evidence of a violation
            of the law. If we become aware of any legal violations, we will remove such links immediately.
          </P>
        </Container>
      </FullScreenSection>
    </Page>
  );
};

export default ImprintPage;