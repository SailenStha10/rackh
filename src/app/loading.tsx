export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,rgba(255,250,248,0.95),rgba(255,255,255,0.88))] px-4">
      <div className="text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/70 shadow-sm">
          <svg viewBox="0 0 64 64" className="size-14 animate-spin" aria-hidden="true">
            <circle cx="32" cy="32" r="24" fill="none" stroke="rgba(217,31,99,0.14)" strokeWidth="6" />
            <circle cx="32" cy="32" r="18" fill="none" stroke="rgba(217,31,99,0.85)" strokeWidth="6" strokeDasharray="24 10" />
          </svg>
        </div>
        <p className="font-display mt-5 text-2xl font-semibold text-[color:var(--foreground)]">
          Welcome to RAC Kathmandu Height
        </p>
        <p className="muted-copy mt-2 text-sm">Loading the club experience.</p>
      </div>
    </div>
  );
}