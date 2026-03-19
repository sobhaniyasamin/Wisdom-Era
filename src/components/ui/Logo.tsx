export function Logo({ size = 42 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 60 60"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="6" y="14" width="20" height="36" rx="10" stroke="#68C5B2" strokeWidth="3" fill="none" />
      <rect x="34" y="14" width="20" height="36" rx="10" stroke="#68C5B2" strokeWidth="3" fill="none" />
      <line x1="30" y1="50" x2="30" y2="28" stroke="#68C5B2" strokeWidth="2.5" />
      <circle cx="30" cy="24" r="3" fill="#68C5B2" />
      <line x1="30" y1="24" x2="20" y2="16" stroke="#fff" strokeWidth="1.5" opacity="0.7" />
      <line x1="30" y1="24" x2="40" y2="16" stroke="#fff" strokeWidth="1.5" opacity="0.7" />
      <line x1="30" y1="24" x2="22" y2="30" stroke="#fff" strokeWidth="1.2" opacity="0.5" />
      <line x1="30" y1="24" x2="38" y2="30" stroke="#fff" strokeWidth="1.2" opacity="0.5" />
      <circle cx="20" cy="16" r="2" fill="#fff" opacity="0.6" />
      <circle cx="40" cy="16" r="2" fill="#fff" opacity="0.6" />
      <circle cx="22" cy="30" r="1.5" fill="#fff" opacity="0.4" />
      <circle cx="38" cy="30" r="1.5" fill="#fff" opacity="0.4" />
      <line x1="20" y1="16" x2="14" y2="22" stroke="#fff" strokeWidth="1" opacity="0.3" />
      <line x1="40" y1="16" x2="46" y2="22" stroke="#fff" strokeWidth="1" opacity="0.3" />
      <circle cx="14" cy="22" r="1" fill="#fff" opacity="0.3" />
      <circle cx="46" cy="22" r="1" fill="#fff" opacity="0.3" />
    </svg>
  );
}
