import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { LEGAL } from '../data/content'

const { provider, contentResponsible } = LEGAL

export default function Impressum() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title="Impressum"
        intro="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-arc max-w-3xl">
          <Reveal>
            <div className="space-y-10 leading-relaxed text-ink-700">
              <Block title="Diensteanbieter">
                <p className="font-medium text-ink-900">{provider.name}</p>
                <p>{provider.legalForm}</p>
                <Address lines={provider.address} />
              </Block>

              <Block title="Vertretungsberechtigt">
                <p>{provider.name} wird vertreten durch {provider.representedBy}.</p>
              </Block>

              <Block title="Kontakt">
                <p>Telefon: {provider.phone}</p>
                <p>
                  E-Mail:{' '}
                  <a className="text-arc-700 hover:underline" href={`mailto:${provider.email}`}>
                    {provider.email}
                  </a>
                </p>
              </Block>

              <Block title="Umsatzsteuer-Identifikationsnummer">
                <p>Gemäß § 27a Umsatzsteuergesetz: {provider.vatId}</p>
              </Block>

              <Block title="Zuständige Aufsichtsbehörde">
                <p>{provider.supervisoryAuthority}</p>
              </Block>

              <Block title="Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV">
                <p className="font-medium text-ink-900">{contentResponsible.name}</p>
                <p>{contentResponsible.unit}</p>
                <Address lines={contentResponsible.address} />
                <p className="mt-2">
                  E-Mail:{' '}
                  <a
                    className="text-arc-700 hover:underline"
                    href={`mailto:${contentResponsible.email}`}
                  >
                    {contentResponsible.email}
                  </a>
                </p>
              </Block>

              <Block title="Haftung für Inhalte">
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
                  auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
                  §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                  überwachen oder nach Umständen zu forschen, die auf eine
                  rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
                  oder Sperrung der Nutzung von Informationen nach den allgemeinen
                  Gesetzen bleiben hiervon unberührt.
                </p>
              </Block>

              <Block title="Haftung für Links">
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                  Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                  fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                  Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen
                  werden wir derartige Links umgehend entfernen.
                </p>
              </Block>

              <Block title="Urheberrecht">
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                  Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
                  als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                  Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                  Autors bzw. Erstellers.
                </p>
              </Block>
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
