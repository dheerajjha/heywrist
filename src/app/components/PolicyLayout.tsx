import Link from "next/link";

export default function PolicyLayout({
  appName,
  title,
  children,
}: {
  appName: string;
  title: string;
  children: React.ReactNode;
}) {
  const slug = appName.toLowerCase();
  return (
    <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
      <nav className="mb-8 text-sm text-gray-500 flex gap-2">
        <Link href="/" className="hover:text-gray-900">
          HeyWrist
        </Link>
        <span>/</span>
        <span className="capitalize">{appName}</span>
        <span>/</span>
        <span className="text-gray-900">{title}</span>
      </nav>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-500 mb-8">
        For {appName} &mdash;{" "}
        <Link
          href={`/${slug}/${title === "Privacy Policy" ? "terms" : "privacy"}`}
          className="underline hover:text-gray-900"
        >
          {title === "Privacy Policy"
            ? "Terms & Conditions"
            : "Privacy Policy"}
        </Link>
      </p>
      <article className="prose prose-gray max-w-none">{children}</article>
      <footer className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Ranju Jha. All rights reserved.
        </p>
        <p className="mt-1">
          Contact:{" "}
          <a
            href="mailto:support@heywrist.com"
            className="underline hover:text-gray-900"
          >
            support@heywrist.com
          </a>
        </p>
      </footer>
    </main>
  );
}
