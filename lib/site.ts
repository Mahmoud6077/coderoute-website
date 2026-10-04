export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const digits = (v: string | undefined) => (v ?? "").replace(/\D/g, "");

export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  whatsapp: digits(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
  demoWhatsapp: digits(process.env.NEXT_PUBLIC_DEMO_WHATSAPP_NUMBER),
  email: (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "").trim(),
};

export const needOptions = ["assistant", "automation", "website", "app", "unsure"] as const;
export type Need = (typeof needOptions)[number];
