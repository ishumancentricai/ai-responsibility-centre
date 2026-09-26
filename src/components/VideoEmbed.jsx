import { useState } from 'react'

/**
 * VideoEmbed — privacy-first "click to load" YouTube player.
 *
 * Nothing reaches Google until the visitor actively starts the video: the
 * poster frame is served from our own domain and the iframe is only mounted
 * on click. That keeps the site free of consent banners under § 25 TDDDG,
 * because no third-party connection is opened without consent.
 *
 * `poster` must therefore be a self-hosted file (public/video/…) — linking
 * i.ytimg.com would defeat the whole point.
 */
export default function VideoEmbed({ id, title, poster }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <Frame>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Frame>
    )
  }

  return (
    <figure className="m-0">
      <Frame>
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arc-300 focus-visible:ring-offset-2"
          aria-label={`Play video: ${title}`}
        >
          {poster && (
            <img
              src={poster}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <span
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10 transition-colors group-hover:from-black/80"
            aria-hidden
          />

          {/* play affordance */}
          <span
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-300 group-hover:scale-110"
            aria-hidden
          >
            <svg className="ml-1 h-6 w-6 text-arc-900" viewBox="0 0 24 24" fill="none">
              <path d="M8 5.5v13l11-6.5L8 5.5Z" fill="currentColor" />
            </svg>
          </span>
        </button>
      </Frame>

      <figcaption className="mt-2 text-xs leading-relaxed text-ink-500">
        Starting the video loads it from YouTube (youtube-nocookie.com) and transmits your
        IP address to Google. Nothing is sent until you press play.
      </figcaption>
    </figure>
  )
}

function Frame({ children }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-black/5 bg-ink-900">
      {children}
    </div>
  )
}
