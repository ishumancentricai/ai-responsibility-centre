import { Link } from 'react-router-dom'
import { Stagger, StaggerItem } from './Reveal'
import PropertyIcon from './PropertyIcon'
import { VISION, PROPERTY_EVIDENCE } from '../data/content'

/**
 * VisionProperties — the five properties ARC works towards.
 *
 * The point is that they are not adjectives. They are the same five words the
 * publications are tagged with, so each one can show how much published work
 * stands behind it and link to that work. A centre that argues trust should be
 * earned rather than assumed ought to evidence its own vocabulary.
 *
 * Counts come from the data, so they rise on their own as papers land. A
 * property with nothing behind it yet simply shows no count — better an
 * honest blank than a nought.
 *
 * One shape everywhere, and a wrapping row rather than a grid: it takes the
 * width it is given, so the full-bleed section on the home page and the narrow
 * column on the About page get the same thing, just broken differently.
 *
 * At rest the row is ink only, so five pills in a line stay quiet. The brand
 * green belongs to the one you are pointing at.
 */
export default function VisionProperties({ className = '' }) {
  return (
    <div className={`group/row ${className}`}>
      <Stagger className="flex flex-wrap gap-2.5" step={0.07}>
        {VISION.properties.map((property) => {
          const count = PROPERTY_EVIDENCE[property] ?? 0
          return (
            <StaggerItem key={property} y={12}>
              <Link
                to={`/research?property=${property}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-ink-900/15 bg-white px-4 py-2.5 transition-colors duration-300 hover:border-arc-600 hover:bg-arc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arc-600"
              >
                <PropertyIcon
                  name={property}
                  className="h-4 w-4 shrink-0 text-ink-500 transition-colors duration-300 group-hover:text-arc-800"
                />

                <span className="text-base font-medium capitalize leading-none text-ink-900 transition-colors duration-300 group-hover:text-arc-900">
                  {property}
                </span>

                {count > 0 && (
                  <>
                    <span
                      className="h-3.5 w-px bg-ink-900/15 transition-colors duration-300 group-hover:bg-arc-600"
                      aria-hidden
                    />
                    <span className="text-xs font-medium tabular-nums leading-none text-ink-500 transition-colors duration-300 group-hover:text-arc-800">
                      {count}
                      <span className="sr-only">
                        {count === 1 ? ' publication' : ' publications'}
                      </span>
                    </span>
                  </>
                )}
              </Link>
            </StaggerItem>
          )
        })}
      </Stagger>

      {/* Reserved height, so revealing the hint shifts nothing below it. */}
      <p className="mt-3 h-4 text-xs leading-4 text-ink-500 opacity-0 transition-opacity duration-300 group-focus-within/row:opacity-100 group-hover/row:opacity-100">
        Click a property to see the publications behind it.
      </p>
    </div>
  )
}
