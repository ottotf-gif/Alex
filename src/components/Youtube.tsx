import { ArrowUpRight, Play } from 'lucide-react';
import { YOUTUBE_VIDEOS, YOUTUBE_URL, IMAGES } from '../data/content';

export default function VideoSection() {
  return (
    <section id="videor" className="bg-paper py-24 text-ink md:py-32">
      <div className="container-x">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              På YouTube
            </p>
            <h2 className="display-lg text-ink text-balance">
              Lär dig gratis, <span className="italic text-teal">boka sen.</span>
            </h2>
          </div>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline shrink-0 border-ink/30 text-ink hover:border-teal hover:text-teal"
          >
            Alla videor
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-3">
          {YOUTUBE_VIDEOS.map((video) => (
            <a
              key={video.id}
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-paper"
            >
              <div className="relative aspect-video overflow-hidden bg-navy">
                <img
                  src={IMAGES.videoThumb}
                  alt={video.title}
                  className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center bg-sand text-ink transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-0.5 h-5 w-5 fill-ink" />
                </span>
                <span className="absolute bottom-3 right-3 bg-ink px-2 py-1 font-mono text-xs text-white">
                  {video.duration}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl leading-snug text-ink">{video.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-wider text-body/45">{video.views}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}