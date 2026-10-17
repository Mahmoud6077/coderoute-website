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

const socialPaths: Record<"linkedin" | "instagram" | "facebook", React.ReactNode> = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.46h-4v-4.84c0-1.16-.02-2.64-1.61-2.64-1.61 0-1.86 1.26-1.86 2.56v4.92h-4z" fill="currentColor" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" />
    </>
  ),
  facebook: (
    <path d="M13.5 21v-7.5h2.6l.4-3.1h-3V8.5c0-.9.25-1.5 1.55-1.5h1.6V4.2c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.41-3.9 4V10.4H7.8v3.1h2.6V21z" fill="currentColor" />
  ),
};

export function SocialIcon({ name }: { name: keyof typeof socialPaths }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {socialPaths[name]}
    </svg>
  );
}
