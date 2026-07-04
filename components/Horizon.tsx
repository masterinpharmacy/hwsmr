export default function Horizon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-horizon bg-[length:100%_140%] animate-breathe"
        aria-hidden
      />
      {/* Polder silhouette */}
      <svg
        aria-hidden
        className="absolute bottom-0 left-0 w-full text-dusk/90"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,80 L120,74 L260,86 L420,70 L600,84 L760,68 L940,82 L1100,72 L1280,86 L1440,76 L1440,120 L0,120 Z"
        />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
