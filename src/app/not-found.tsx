import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-[5%] md:px-[8%]">
      <div className="text-center max-w-[520px]">
        <div className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-accent mb-6">
          Error 404
        </div>
        <div className="font-display text-[clamp(5rem,14vw,9rem)] font-extrabold text-paper/[0.08] leading-none mb-4 select-none">
          404
        </div>
        <h1 className="text-3xl text-paper mb-4 tracking-[-0.02em]">Page not found</h1>
        <p className="text-paper-muted mb-9 leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-accent text-accent-ink px-7 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-accent-bright hover:shadow-[0_0_30px_-6px_rgba(92,200,189,0.5)] no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          <ArrowLeft size={18} />
          Back to home
        </Link>
      </div>
    </section>
  );
}
