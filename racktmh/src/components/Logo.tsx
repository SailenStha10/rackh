import Link from "next/link";

type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 text-left ${className}`}
      aria-label="Rotaract Club of Kathmandu Height home"
    >
      <span className="relative flex size-12 items-center justify-center rounded-[1.15rem] border border-[color:var(--border)] bg-[color:var(--panel-strong)] shadow-[0_18px_50px_rgba(25,10,24,0.16)] transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_24px_70px_rgba(25,10,24,0.18)]">
        <svg viewBox="0 0 64 64" className="size-10 drop-shadow-sm" aria-hidden="true">
          <defs>
            <linearGradient id="racktmh-wheel" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#f3d15a" />
              <stop offset="48%" stopColor="#f75b8f" />
              <stop offset="100%" stopColor="#d91f63" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="25" fill="none" stroke="url(#racktmh-wheel)" strokeWidth="5" />
          {Array.from({ length: 10 }).map((_, index) => {
            const angle = (index * 360) / 10;
            return (
              <g key={index} transform={`translate(32 32) rotate(${angle})`}>
                <rect x="-2" y="-31" width="4" height="9" rx="2" fill="#d91f63" />
              </g>
            );
          })}
          <circle cx="32" cy="32" r="10" fill="#fffaf8" stroke="#d91f63" strokeWidth="3" />
          <path d="M24 16h16l-2 5H26z" fill="#f0c446" />
          <path d="M25 45c0-5.5 3.2-10.5 7-13.5 3.8 3 7 8 7 13.5" fill="none" stroke="#f75b8f" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="font-display block text-lg font-semibold tracking-tight text-[color:var(--foreground)]">
            Rotaract
          </span>
          <span className="block text-[0.64rem] font-medium uppercase tracking-[0.34em] text-[color:var(--muted)]">
            Club of Kathmandu Height
          </span>
        </span>
      )}
    </Link>
  );
}