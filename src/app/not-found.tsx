import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center px-4 py-16 text-center">
      <div className="surface rounded-[2rem] px-8 py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--primary)]">404</p>
        <h1 className="font-display mt-4 text-4xl font-semibold">Page not found</h1>
        <p className="muted-copy mt-4 text-base leading-8">
          The page you are looking for does not exist. Return to the home page to explore the club site.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--primary),#ef4f86_55%,var(--accent))] px-5 py-3 text-sm font-semibold text-white"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}