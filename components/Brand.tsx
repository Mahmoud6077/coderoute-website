export function Mark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M46.1 17.9 A20 20 0 1 0 46.1 46.1" stroke="var(--text)" strokeWidth="7" strokeLinecap="round" />
      <circle cx="46.1" cy="46.1" r="7.5" fill="var(--brand)" />
    </svg>
  );
}

export function Wordmark({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "wordmark wordmark-sm latin" : "wordmark latin"} dir="ltr" lang="en">
      Code<span className="accent">Route</span>
    </span>
  );
}

const paths: Record<string, React.ReactNode> = {
  assistant: (
    <>
      <path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.6A8 8 0 1 1 21 12z" />
      <path d="M9 11h6" />
      <path d="M9 14h4" />
    </>
  ),
  automation: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="12" r="2" />
      <circle cx="5" cy="18" r="2" />
      <path d="M7 6h5a3 3 0 0 1 3 3v0a3 3 0 0 0 2 3" />
      <path d="M7 18h5a3 3 0 0 0 3-3" />
    </>
  ),
  website: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 21h8" />
    </>
  ),
  app: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: keyof typeof paths }) {
  return (
    <svg className="service-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
