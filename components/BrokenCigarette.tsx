export default function BrokenCigarette() {
  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full overflow-visible"
      aria-hidden="true"
    >
      <ellipse cx="160" cy="150" rx="120" ry="14" fill="#000" opacity="0.12" />
      {/* left piece (paper end) */}
      <g transform="translate(30,95) rotate(-9)">
        <rect
          x="0"
          y="0"
          width="128"
          height="26"
          rx="13"
          fill="#F7F5F1"
          stroke="#1B2429"
          strokeWidth="2"
        />
        <line x1="30" y1="6" x2="30" y2="20" stroke="#1B2429" strokeWidth="1.5" opacity="0.35" />
        <line x1="55" y1="6" x2="55" y2="20" stroke="#1B2429" strokeWidth="1.5" opacity="0.35" />
        <line x1="80" y1="6" x2="80" y2="20" stroke="#1B2429" strokeWidth="1.5" opacity="0.35" />
      </g>
      {/* right piece (filter end) */}
      <g transform="translate(178,108) rotate(7)">
        <rect
          x="0"
          y="0"
          width="112"
          height="26"
          rx="13"
          fill="#F7F5F1"
          stroke="#1B2429"
          strokeWidth="2"
        />
        <line x1="24" y1="6" x2="24" y2="20" stroke="#1B2429" strokeWidth="1.5" opacity="0.35" />
        <line x1="46" y1="6" x2="46" y2="20" stroke="#1B2429" strokeWidth="1.5" opacity="0.35" />
        <rect
          x="66"
          y="0"
          width="46"
          height="26"
          rx="13"
          fill="#D4A657"
          stroke="#1B2429"
          strokeWidth="2"
        />
        <line x1="78" y1="4" x2="78" y2="22" stroke="#1B2429" strokeWidth="1.2" opacity="0.3" />
        <line x1="90" y1="4" x2="90" y2="22" stroke="#1B2429" strokeWidth="1.2" opacity="0.3" />
      </g>
      {/* tobacco crumbs at the break */}
      <ellipse cx="160" cy="122" rx="4" ry="2.5" fill="#A67C52" transform="rotate(20 160 122)" />
      <ellipse cx="168" cy="130" rx="3" ry="2" fill="#A67C52" transform="rotate(-10 168 130)" />
      <ellipse cx="150" cy="132" rx="3.5" ry="2" fill="#A67C52" transform="rotate(40 150 132)" />
      <ellipse cx="163" cy="140" rx="2.5" ry="1.8" fill="#A67C52" />
    </svg>
  );
}
