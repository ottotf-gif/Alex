import { Play, Youtube, ExternalLink } from 'lucide-react';
import { YOUTUBE_VIDEOS, YOUTUBE_URL, IMAGES } from '../data/content';

export default function VideoSection() {
  return (
    <section id="videor" className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="mb-16 max-w-2xl">
          <span className="eyebrow">På YouTube</span>
          <h2 className="display-lg mt-5 text-balance">
            Lär dig gratis —{' '}
            <span className="italic text-teal">boka sen.</span>
          </h2>
          <p className="mt-5 max-w-prose leading-relaxed text-body/70">
            Korta, gratis videolektioner att börja med. Gillar du sättet jag
            undervisar på? Då tar vi nästa steg tillsammans.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {YOUTUBE_VIDEOS.map((video) => (
            <a
              key={video.id}
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-navy/[0.07] bg-cream transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(15,23,42,0.4)]"
            >
              <div className="relative flex aspect-video items-center justify-center overflow-hidden">
                <img
                  src={IMAGES.videoThumb}
                  alt={video.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-0.5 h-6 w-6 fill-white text-white" />
                </span>
                <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 font-mono text-xs text-white">
                  {video.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-medium leading-snug text-navy">{video.title}</h3>
                <div className="mt-2 flex items-center gap-2 text-xs text-body/50">
                  <Youtube className="h-3.5 w-3.5 text-red-500" />
                  <span>{video.views}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Youtube className="h-4 w-4" />
            Se alla videor på YouTube
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}