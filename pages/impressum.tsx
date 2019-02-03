import '../app';
import  React from 'react';
import Head from 'next/head';
import {Layout} from '../components/Layout/Layout';

/**
 * german impressum page
 */
export default () => (
	<>
		<Head>
			<title>Impressum | jens-uwe-loessl.de</title>
		</Head>
		<Layout>
			<>
				<h1>Impressum</h1>
				<p>Die Webseite wird betrieben von:<br /><br/>
					Jens-Uwe Lössl<br />
					Steigerstraße 2<br/>
					99096 Erfurt<br/><br/>
					E-Mail: impressum@jens-uwe-loessl.de<br/>
					Tel.: 0152 52 967 837
				</p> <h2 className="title is-4">Streitschlichtung</h2> <p>Die Plattform zur Online-Streitbeilegung der
					EU-Kommission finden Sie unter
					http://ec.europa.eu/consumers/odr. Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
					Verbraucherschlichtungsstelle nicht verpflichtet und nicht bereit.</p> <h2
					className="title is-4">Haftungshinweis</h2> <p>Unser Angebot enthält Links zu externen Webseiten
					Dritter, auf deren Inhalte wir keinen Einfluss haben.
					Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
					verlinkten
					Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
					wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
					zum Zeitpunkt der Verlinkung nicht erkennbar.</p> <p>Eine permanente inhaltliche Kontrolle der
					verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
					Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
					umgehend entfernen.</p>
			</>
		</Layout>
	</>
)