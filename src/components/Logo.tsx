"use client";

export default function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  const teeth = [0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
    const rad = (angle * Math.PI) / 180;
    const x1 = 45 + Math.cos(rad) * 28;
    const y1 = 45 + Math.sin(rad) * 28;
    const x2 = 45 + Math.cos(rad) * 38;
    const y2 = 45 + Math.sin(rad) * 38;
    return { x1, y1, x2, y2, key: angle };
  });

  return (
    <svg
      viewBox="0 0 360 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Rotaract Club of Kathmandu Height"
    >
      <text x="10" y="28" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#e91e63">
        Rotaract
      </text>
      <text x="12" y="52" fontFamily="Arial, sans-serif" fontSize="16" fill="#e91e63">
        Club of Kathmandu Height
      </text>

      <g transform="translate(240, 10)">
        <circle cx="45" cy="45" r="38" stroke="#e91e63" strokeWidth="6" fill="none" />
        <circle cx="45" cy="45" r="22" stroke="#e91e63" strokeWidth="4" fill="none" />
        <circle cx="45" cy="45" r="10" fill="#e91e63" />
        {teeth.map((t) => (
          <line key={t.key} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="#e91e63" strokeWidth="6" strokeLinecap="round" />
        ))}
        <text x="45" y="42" textAnchor="middle" fontSize="7" fill="#e91e63" fontFamily="Arial, sans-serif" fontWeight="bold">
          ROTARY
        </text>
        <text x="45" y="52" textAnchor="middle" fontSize="6" fill="#e91e63" fontFamily="Arial, sans-serif">
          INTERNATIONAL
        </text>
      </g>

      <g transform="translate(305, 55)">
        <path d="M15 85 L15 35 L10 25 L20 25 L15 35 Z" fill="#1a1a1a" />
        <rect x="10" y="35" width="10" height="50" rx="2" fill="#1a1a1a" />
        <rect x="6" y="50" width="18" height="6" rx="1" fill="#1a1a1a" />
        <rect x="6" y="65" width="18" height="6" rx="1" fill="#1a1a1a" />
        <path d="M5 85 Q15 72 25 85" fill="#c62828" />
        <circle cx="15" cy="18" r="6" fill="#f9a825" />
        <path d="M15 8 L15 12 M15 24 L15 28 M8 15 L11 18 M19 18 L22 15 M8 21 L11 18 M19 18 L22 21" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
