import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { LEGAL } from '../data/content'

const { provider, dpo, dpa, hosting, lastUpdated } = LEGAL

export default function Datenschutz() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        intro="Informationen zur Verarbeitung personenbezogener Daten nach der Datenschutz-Grundverordnung (DSGVO) und dem Bayerischen Datenschutzgesetz (BayDSG)."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-arc max-w-3xl">
          <Reveal>
            <div className="space-y-10 leading-relaxed text-ink-700">
              <Block title="1. Verantwortlicher">
                <p>
                  Verantwortlicher im Sinne der DSGVO und sonstiger
                  datenschutzrechtlicher Bestimmungen ist:
                </p>
                <p className="mt-2 font-medium text-ink-900">{provider.name}</p>
                <p>{provider.legalForm}</p>
                <Address lines={provider.address} />
                <p className="mt-2">
                  Vertreten durch {provider.representedBy}.
                </p>
                <p className="mt-2">
                  E-Mail:{' '}
                  <a className="text-arc-700 hover:underline" href={`mailto:${provider.email}`}>
                    {provider.email}
                  </a>
                </p>
              </Block>

              <Block title="2. Datenschutzbeauftragte/r">
                <p>{dpo.name}</p>
                <Address lines={dpo.address} />
                <p className="mt-2">
                  E-Mail:{' '}
                  <a className="text-arc-700 hover:underline" href={`mailto:${dpo.email}`}>
                    {dpo.email}
                  </a>
                </p>
              </Block>

              <Block title="3. Bereitstellung der Website und Erstellung von Logfiles">
                <p>
                  Diese Website wird als statische Website über den Dienst{' '}
                  <strong>{hosting.service}</strong> des Anbieters{' '}
                  <strong>{hosting.provider}</strong>, {hosting.address}, gehostet.
                  Beim Aufruf der Website verarbeitet der Hosting-Anbieter
                  automatisch Informationen, die Ihr Browser übermittelt, in
                  sogenannten Server-Logfiles. Dies sind insbesondere:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>die anonymisierte bzw. gekürzte IP-Adresse des anfragenden Geräts,</li>
                  <li>Datum und Uhrzeit des Zugriffs,</li>
                  <li>Name und URL der abgerufenen Datei,</li>
                  <li>verwendeter Browser und ggf. das Betriebssystem,</li>
                  <li>die Website, von der aus der Zugriff erfolgt (Referrer-URL).</li>
                </ul>
                <p className="mt-2">
                  Die Verarbeitung erfolgt zur Wahrnehmung einer im öffentlichen
                  Interesse liegenden Aufgabe (Art. 6 Abs. 1 lit. e DSGVO i. V. m.
                  Art. 4 BayDSG) sowie zur Gewährleistung eines technisch
                  fehlerfreien und sicheren Betriebs der Website.
                </p>
                <p className="mt-2">
                  Bei der Nutzung von {hosting.service} können Daten in die USA
                  übertragen werden. {hosting.provider} ist nach dem EU-U.S. Data
                  Privacy Framework zertifiziert. Weitere Informationen finden Sie in
                  der{' '}
                  <a
                    className="text-arc-700 hover:underline"
                    href={hosting.privacyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Datenschutzerklärung von {hosting.provider}
                  </a>
                  .
                </p>
              </Block>

              <Block title="4. Kontaktaufnahme">
                <p>
                  Auf dieser Website wird kein serverseitiges Kontaktformular
                  betrieben. Die Schaltflächen zur Kontaktaufnahme öffnen Ihr lokales
                  E-Mail-Programm. Wenn Sie uns per E-Mail kontaktieren, werden die von
                  Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Inhalt der
                  Nachricht) zur Bearbeitung Ihres Anliegens verarbeitet. Rechtsgrundlage
                  ist Art. 6 Abs. 1 lit. e DSGVO (Wahrnehmung einer öffentlichen
                  Aufgabe) bzw. Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogenen
                  Anfragen. Die Daten werden gelöscht, sobald sie für die Erreichung
                  des Zwecks nicht mehr erforderlich sind und keine gesetzlichen
                  Aufbewahrungspflichten entgegenstehen.
                </p>
              </Block>

              <Block title="5. Cookies, Tracking und Analyse">
                <p>
                  Diese Website verwendet keine Cookies, kein Tracking und keine
                  Webanalyse-Dienste. Es werden keine Schriftarten, Karten oder
                  sonstigen Inhalte dynamisch von Drittanbietern nachgeladen.
                </p>
              </Block>

              <Block title="6. Ihre Rechte als betroffene Person">
                <p>Sie haben im Rahmen der gesetzlichen Vorgaben das Recht auf:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>Auskunft über die zu Ihrer Person verarbeiteten Daten (Art. 15 DSGVO),</li>
                  <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
                  <li>Löschung (Art. 17 DSGVO),</li>
                  <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
                  <li>Datenübertragbarkeit (Art. 20 DSGVO) sowie</li>
                  <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).</li>
                </ul>
                <p className="mt-2">
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an den oben genannten
                  Verantwortlichen oder an die/den Datenschutzbeauftragte/n.
                </p>
              </Block>

              <Block title="7. Beschwerderecht bei der Aufsichtsbehörde">
                <p>
                  Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über
                  die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
                  Zuständig ist:
                </p>
                <p className="mt-2 font-medium text-ink-900">{dpa.name}</p>
                <Address lines={dpa.address} />
                <p className="mt-1">
                  <a
                    className="text-arc-700 hover:underline"
                    href={dpa.web}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {dpa.web}
                  </a>
                </p>
              </Block>

              <Block title="8. Verschlüsselung (SSL/TLS)">
                <p>
                  Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
                  Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
                  Eine verschlüsselte Verbindung erkennen Sie am „https://“ in der
                  Adresszeile Ihres Browsers.
                </p>
              </Block>

              <p className="border-t border-black/5 pt-6 text-sm text-ink-500">
                Stand: {lastUpdated}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Block({ title, children }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-ink-900">{title}</h2>
      <div className="mt-2 space-y-1">{children}</div>
    </div>
  )
}

function Address({ lines }) {
  return (
    <address className="not-italic">
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </address>
  )
}
