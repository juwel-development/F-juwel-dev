import '../app';
import Head from 'next/head';
import  React from 'react';
import {Layout} from '../components/Layout/Layout';

/**
 * german datenschutz page
 */
export default () => (
	<>
		<Head>
			<title>Datenschutz | jens-uwe-loessl.de</title>
		</Head>
		<Layout>
			<>
				<h1 >Datenschutzerklärung</h1> <p>Jens-Uwe Lössl,
					Steigerstraße 2, 99096 Erfurt, nachfolgend Betreiber genannt, ist verantworlich für die
					Verarbeitung personbezogener Daten der Nutzer der Webseite aktienbewertungen.net. Der Betreiber erhebt
					und
					verarbeitet Ihre personbezogenen Daten im Sinne des Bundesdatenschutzgesetzes(BDSG) und Telemediengesetz
					(TMG). Bitte lesen Sie nachfolgende Datenschutzerklärung aufmerksam durch.</p>
					<div className="ds-box"><h2 className="title is-4">1. Personbezogene Daten</h2>
						<p>Personbezogene Daten, sind alle Daten die Sie als Nutzer unserer Webseite identifizieren können.
							Hierzu zählen auch alle Angaben zu Ihren persönlichen und sachlichen Verhältnissen. Wenn Sie ein
							registrierter Nutzer sind erhebt der Betreiber folgende Daten:</p>
						<ul>
							<li>Ihre E-Mailadresse</li>
						</ul>
						<p>
							Ihre Daten werden nicht an Dritte weitergegeben.
						</p>
					</div>
					<div className="ds-box"><h2 className="title is-4">2. Verwendung Ihrer Daten</h2>
						<p>Ihre personbezogenen Daten verwendet der Betreiber zu folgenden Zwecken:</p>
						<ul>
							<li>Um Sie über Neuerungen zu unserem Angebot zu informieren.</li>
							<li>Zur statistischen Auswertung, um das Angebot zu verbessern und weiterzuentwickeln.
								Hierbei verwendet der Betreiber anonymisierte Daten, die keinerlei Rückschlüsse zu Ihrer
								Person treffen lassen.
							</li>
						</ul>
					</div>
					<div className="ds-box"><h2 className="title is-4">3. Cookies</h2>
						<p>Der Betreiber speichert Informationen über die Nutzung unserer Webseite im sog. Cookies. Dabei
							handelt es sich um kleine Textdateien, die auf Ihrer Festplatte hinterlegt und abhängig von der
							Einstellung Ihres Browser-Programms beim Beenden des Browsers wieder gelöscht werden. Diese
							Cookies rufen keine auf Ihrer Festplatte über Sie gespeicherten Informationen ab und
							beeinträchtigen nicht Ihren PC oder ihre Dateien. Die meisten Browser sind so eingestellt, dass
							sie Cookies automatisch akzeptieren. Sie können das Speichern von Cookies jedoch deaktivieren
							oder ihren Browser so einstellen, dass er Sie auf die Sendung von Cookies hinweist. Der
							Betreiber legt folgende Cookies an: keine Cookies
							{/*<table className="table">*/}
								{/*<thead>*/}
								{/*<tr>*/}
									{/*<th>Name des Cookies</th>*/}
									{/*<th>Zweck</th>*/}
									{/*<th>Speicherdauer</th>*/}
								{/*</tr>*/}
								{/*</thead>*/}
								{/*<tbody>*/}
								{/*<tr>*/}
									{/*<td>aktienbewertungennet_session</td>*/}
									{/*<td>Nutzerkennung zum Nachladen von Daten. - technisch notwendig</td>*/}
									{/*<td>bis zum Verlassen der Seite</td>*/}
								{/*</tr>*/}
								{/*<tr>*/}
									{/*<td>allowCookies</td>*/}
									{/*<td>Speichern, ob Einverständnis des Nutzers zum Setzen von Cookies vorhanden ist</td>*/}
									{/*<td>60 Tage ab Bestätigung</td>*/}
								{/*</tr>*/}
								{/*</tbody>*/}
							{/*</table>*/}
						</p>
					</div>
					<div className="ds-box"><h2 className="title is-4">4. Änderungen dieser Datenschutzbestimmungen</h2>
						<p>Der Betreiber wird diese Richtlinien zum Schutz Ihrer persönlichen Daten von Zeit zu Zeit
							aktualisieren. Sie sollten sich diese Richtlinien gelegentlich ansehen, um auf dem Laufenden
							darüber zu bleiben, wie der Betreiber Ihre Daten schützen und die Inhalte unserer Website stetig
							verbessern. Sollte der Betreiber wesentliche Änderungen bei der Sammlung, der Nutzung und/oder
							der Weitergabe der uns von Ihnen zur Verfügung gestellten personenbezogenen Daten vornehmen,
							wird der Betreiber Sie durch einen eindeutigen und gut sichtbaren Hinweis auf der Website darauf
							aufmerksam machen. Mit der Nutzung der Webseite erklären Sie sich mit den Bedingungen dieser
							Richtlinien zum Schutz persönlicher Daten einverstanden.</p></div>
					<div className="ds-box"><h2 className="title is-4">5. Schlussbestimmungen</h2> <p>Sie haben jederzeit
						das Recht, Auskunft darüber zu verlangen, welche Daten der Betreiber über Sie gespeichert hat. Sie
						können diese Daten jederzeit Berichtigen oder Löschen. Bitte beachten Sie dass durch Löschen
						relevanter Daten die Webseite nicht mehr im vollem Umfang benutzt werden kann. Falls allerdings
						gesetzliche Aufbewahrungspflichten bestehen, wird der Betreiber Ihre Daten für die weitere Nutzung
						sperren.</p></div>
					<div className="ds-box"><h2 className="title is-4">6. Kontakt</h2> <p>Bei Fragen kontaktieren Sie den
						Betreiber unter info@aktienbewertungen.net oder postalisch unter oben angegebener Adresse. Ggf.
						verlangen wir einen Nachweis Ihrer Identität, um sicherzugehen, dass Ihre Daten nicht durch Dritte
						verändert oder eingesehen werden können.</p>
				</div>
			</>
		</Layout>
	</>
)