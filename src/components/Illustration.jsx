import { ILLUSTRATION_SOURCE as SRC } from '../data/content'

/**
 * Illustration — artwork from Better Images of AI with its credit attached.
 *
 * The credit is not decoration. These images are CC BY 4.0, and the licence
 * requires naming the artist and linking to both the source and the licence;
 * leaving it off terminates the licence. That is why the credit lives inside
 * this component rather than being left to each caller to remember.
 *
 * It rests over the bottom-right corner and fades in on hover or keyboard
 * focus. On a device with no pointer there is no hover, so `credit-overlay`
 * keeps it visible there — otherwise the attribution would be missing on
 * every phone. The artwork title is dropped: the licence asks for artist,
 * source and licence, and three parts stay legible where four do not.
 */
export default function Illustration({ item, className = '', imgClassName = '' }) {
  if (!item) return null

  return (
    <figure className={`group/art relative m-0 overflow-hidden ${className}`}>
      <img
        src={item.file}
        alt={item.alt}
        loading="lazy"
        draggable={false}
        className={imgClassName}
      />

      <figcaption className="credit-overlay absolute bottom-0 right-0 z-30 max-w-full bg-ink-900/75 px-1.5 py-0.5 text-xs leading-tight text-white/90 opacity-0 transition-opacity duration-300 group-focus-within/art:opacity-100 group-hover/art:opacity-100">
        {item.artist} /{' '}
        <a
          href={SRC.href}
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-2 hover:text-white"
        >
          {SRC.name}
        </a>{' '}
        /{' '}
        <a
          href={SRC.licenceHref}
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-2 hover:text-white"
        >
          {SRC.licence}
        </a>
      </figcaption>
    </figure>
  )
}
