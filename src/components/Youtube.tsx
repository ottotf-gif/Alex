import { ArrowUpRight, Play } from 'lucide-react';
import { YOUTUBE_VIDEOS, YOUTUBE_URL, IMAGES } from '../data/content';

export default function VideoSection() {
  return (
    <section id="videor" className="bg-cream py-24 text-ink md:py-32">
      <div className="container-x">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Gratis på YouTube</p>
            <h2 className="display-lg text-ink text-balance">
              Smaka på min{' '}
              <span className="italic text-teal">undervisning.</span>
            </h2>
          </div>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink/8 px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-teal/10 hover:text-teal"
          >
            Alla videor
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {YOUTUBE_VIDEOS.map((video) => (
            <a
              key={video.id}
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl bg-paper shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={IMAGES.videoThumb}
                  alt={video.title}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/25 transition-colors group-hover:bg-ink/10" />
                <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-0.5 h-5 w-5 fill-ink text-ink" />
                </span>
                <span className="absolute bottom-3 right-3 rounded-md bg-ink/70 px-2 py-1 font-mono text-xs text-white backdrop-blur-sm">
                  {video.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg leading-snug text-ink">{video.title}</h3>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-ink/40">{video.views}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
