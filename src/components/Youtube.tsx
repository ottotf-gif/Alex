import { ArrowUpRight, Play } from 'lucide-react';
import { YOUTUBE_VIDEOS, YOUTUBE_URL, IMAGES } from '../data/content';

export default function VideoSection() {
  return (
    <section id="videor" className="bg-cream py-24 md:py-36">
      <div className="container-x">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">På YouTube</p>
            <h2 className="display-lg text-balance">
              Lär dig gratis, <span className="italic text-teal">boka sen.</span>
            </h2>
          </div>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline shrink-0"
          >
            Alla videor på YouTube
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Skarpa thumbnails, ingen blur */}
        <div className="grid gap-px border border-navy/15 bg-navy/15 md:grid-cols-3">
          {YOUTUBE_VIDEOS.map((video) => (
            <a
              key={video.id}
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={IMAGES.videoThumb}
                  alt={video.title}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-navy/30 transition-colors group-hover:bg-navy/10" />
                <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center bg-paper text-navy transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-0.5 h-5 w-5 fill-navy" />
                </span>
                <span className="absolute bottom-3 right-3 bg-navy px-2 py-1 font-mono text-xs text-cream">
                  {video.duration}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl leading-snug text-navy">{video.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-wider text-body/45">{video.views}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}