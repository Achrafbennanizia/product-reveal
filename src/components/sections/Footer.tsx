export function Footer() {
  return (
    <footer className="relative z-10 snap-end border-t border-line px-5 py-8 md:px-8 md:py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-bone-muted md:flex-row md:items-center md:justify-between">
        <p className="display tracking-[0.18em] text-bone">FIELD INSTRUMENTS</p>
        <p>
          Portfolio project · cinematic 3D product reveal · built with Next.js,
          React Three Fiber, Motion, Lenis
        </p>
        <p>© {new Date().getFullYear()} AURALIS concept</p>
      </div>
    </footer>
  );
}
