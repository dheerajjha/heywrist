import Link from "next/link";

export default function PolicyLayout({
  appName,
  slug: slugProp,
  title,
  children,
}: {
  appName: string;
  slug?: string;
  title: string;
  children: React.ReactNode;
}) {
  const slug = slugProp || appName.toLowerCase().replace(/\s+/g, "");
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 text-sm text-slate-500 flex gap-2">
        <Link href={`/${slug}`} className="hover:text-white transition-colors">
          {appName}
        </Link>
        <span>/</span>
        <span className="text-white">{title}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-slate-400 mb-12">
        For {appName} &mdash;{" "}
        <Link
          href={`/${slug}/${title === "Privacy Policy" ? "terms" : "privacy"}`}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          {title === "Privacy Policy"
            ? "Terms & Conditions"
            : "Privacy Policy"}
        </Link>
      </p>

      <article className="prose prose-invert prose-sm max-w-none [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-slate-300 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-slate-300 [&_li]:mb-1 [&_a]:text-blue-400 [&_a:hover]:text-blue-300 [&_strong]:text-white">
        {children}
      </article>

      <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Hey Wrist. All rights reserved.</p>
        <p className="mt-1">
          Contact:{" "}
          <a
            href="mailto:support@heywrist.com"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            support@heywrist.com
          </a>
        </p>
        <p className="mt-2 text-xs text-slate-600">
          Apple, Apple Watch, iPhone, and App Store are trademarks of Apple Inc.
        </p>
      </footer>
    </main>
  );
}
