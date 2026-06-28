import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-[5%] md:px-[8%]">
      <div className="text-center max-w-[500px]">
        <div className="font-serif text-[8rem] font-bold text-navy/10 leading-none mb-4">404</div>
        <h1 className="text-3xl text-navy mb-4">Page Not Found</h1>
        <p className="text-text-muted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:bg-navy-deep hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(46,62,111,0.25)] no-underline"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
