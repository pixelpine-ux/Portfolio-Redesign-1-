export function GeometricPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="geometric-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="2" fill="#1A2A40" />
            <circle cx="0" cy="0" r="2" fill="#1A2A40" />
            <circle cx="100" cy="0" r="2" fill="#1A2A40" />
            <circle cx="0" cy="100" r="2" fill="#1A2A40" />
            <circle cx="100" cy="100" r="2" fill="#1A2A40" />
            <line x1="0" y1="0" x2="100" y2="100" stroke="#1A2A40" strokeWidth="0.5" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="#1A2A40" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
      </svg>
    </div>
  );
}
