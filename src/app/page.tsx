import Link from "next/link";

const apps = [
  {
    name: "AutoSleepy",
    slug: "autosleepy",
    desc: "Automatic sleep tracking powered by Apple Watch",
  },
  {
    name: "Recordy",
    slug: "recordy",
    desc: "Audio recording for iPhone & Apple Watch",
  },
  {
    name: "Streaky",
    slug: "streaky",
    desc: "Build and track habits with streaks",
  },
  {
    name: "Watery",
    slug: "watery",
    desc: "Smart hydration tracking",
  },
  {
    name: "Screenaway",
    slug: "screenaway",
    desc: "Screen time control for iPhone & Apple Watch",
  },
];

export default function Home() {
  return (
    <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
      <h1 className="text-4xl font-bold mb-2">HeyWrist</h1>
      <p className="text-gray-500 mb-12">
        Privacy policies and terms of service for our apps.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {apps.map((app) => (
          <div key={app.slug} className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-1">{app.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{app.desc}</p>
            <div className="flex gap-4 text-sm">
              <Link
                href={`/${app.slug}/privacy`}
                className="underline hover:text-gray-600"
              >
                Privacy Policy
              </Link>
              <Link
                href={`/${app.slug}/terms`}
                className="underline hover:text-gray-600"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        ))}
      </div>
      <footer className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Ranju Jha. All rights reserved.</p>
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
