import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "../globals.css";
import { Mark, Wordmark } from "@/components/Brand";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";
import ThemeToggle from "@/components/ThemeToggle";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, site } from "@/lib/site";

type Params = Promise<{ lang: string }>;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1526" },
  ],
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: `/${lang}`, languages: { en: "/en", ar: "/ar" } },
    openGraph: { title: t.meta.title, description: t.meta.description, url: `/${lang}`, siteName: "CodeRoute", locale: lang === "ar" ? "ar_BH" : "en_US", type: "website" },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const other = lang === "ar" ? "en" : "ar";

  const cookieTheme = (await cookies()).get("theme")?.value;
  const theme = cookieTheme === "dark" || cookieTheme === "light" ? cookieTheme : undefined;

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} data-theme={theme}>
      <body>
        <a className="skip" href="#main">{lang === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}</a>
        <header className="container header">
          <Link className="brand" href={`/${lang}`} aria-label="CodeRoute">
            <Mark />
            <Wordmark />
          </Link>
          <nav className="nav" aria-label={t.nav.main}>
            <Link href={`/${lang}#services`}>{t.nav.services}</Link>
            {t.work.items.length > 0 && <Link href={`/${lang}#work`}>{t.nav.work}</Link>}
            {site.demoWhatsapp && <Link href={`/${lang}#demo`}>{t.nav.demo}</Link>}
            <Link href={`/${lang}#process`}>{t.nav.process}</Link>
            <Link href={`/${lang}#about`}>{t.nav.about}</Link>
            <Link href={`/${other}`} lang={other} hrefLang={other} className={other === "en" ? "latin" : undefined}>{t.nav.otherLang}</Link>
            <ThemeToggle label={t.nav.theme} />
            <Link className="btn btn-solid" href={`/${lang}#contact`}>{t.nav.cta}</Link>
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="footer">
          <div className="container footer-inner">
            <Link className="brand" href={`/${lang}`} aria-label="CodeRoute">
              <Mark size={28} />
              <Wordmark small />
            </Link>
            <nav className="footer-nav" aria-label={t.footer.label}>
              <Link href={`/${lang}#services`}>{t.footer.services}</Link>
              <Link href={`/${lang}#contact`}>{t.footer.contact}</Link>
              <Link href={`/${lang}/privacy`}>{t.footer.privacy}</Link>
            </nav>
            <div>© {new Date().getFullYear()} <span className="latin" dir="ltr">CodeRoute</span>. {t.footer.rights}</div>
          </div>
        </footer>
        <Reveal />
        <BackToTop label={lang === "ar" ? "العودة إلى الأعلى" : "Back to top"} />
      </body>
    </html>
  );
}
