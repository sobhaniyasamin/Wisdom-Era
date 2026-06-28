import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Markdown from "react-markdown";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { posts, getPost, readingTime, formatDate } from "@/data/insights";
import { Button } from "@/components/ui/Button";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

const md = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-[1.6rem] text-navy mt-12 mb-4 leading-snug" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-[1.25rem] text-navy mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-text-muted leading-[1.85] mb-5 text-[1.05rem]" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 mb-6 space-y-2 text-text-muted leading-[1.8]" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 text-text-muted leading-[1.8]" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="pl-1" {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-navy font-semibold" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-teal-dark underline underline-offset-2 hover:text-teal" {...props} />
  ),
};

export default function InsightPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="pt-32 pb-24 px-[5%] md:px-[8%]">
      <div className="max-w-[720px] mx-auto">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-teal-dark text-sm font-medium mb-8 hover:underline"
        >
          <ArrowLeft size={16} /> All insights
        </Link>

        <div className="flex items-center gap-3 text-[0.8rem] mb-4">
          <span className="text-teal-dark font-semibold tracking-wide uppercase">{post.tag}</span>
          <span className="text-text-muted">
            {formatDate(post.date)} · {readingTime(post.content)} min read
          </span>
        </div>

        <h1 className="text-[clamp(2rem,4vw,3rem)] text-navy leading-[1.1] mb-4">{post.title}</h1>
        <p className="text-text-muted text-[1.1rem] leading-relaxed mb-2">{post.excerpt}</p>
        <p className="text-text-muted text-sm mb-10 pb-10 border-b border-navy/[0.08]">
          By {post.author}
        </p>

        <div className="mb-16">
          <Markdown components={md}>{post.content}</Markdown>
        </div>

        <div className="rounded-2xl bg-navy p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(104,197,178,0.1)_0%,transparent_55%)]" />
          <div className="relative z-[1]">
            <h3 className="text-xl text-white mb-3">Building something in this space?</h3>
            <p className="text-white/60 mb-6 max-w-[440px] mx-auto">
              We back early-stage founders applying AI to e-commerce and agriculture.
            </p>
            <Button href="/pitch" variant="primary">
              Pitch us <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
