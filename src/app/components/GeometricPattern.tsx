export function GeometricPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07] dark:opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1.2" fill="#00BFA6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>
      {/* Top-left cyan glow orb */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan/10 dark:bg-cyan/15 blur-3xl" />
      {/* Bottom-right navy glow orb */}
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-navy/5 dark:bg-cyan/10 blur-3xl" />
    </div>
  );
}
