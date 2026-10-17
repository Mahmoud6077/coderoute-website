import type { Metadata, Viewport } from "next";
import { cookies, headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "../globals.css";
import { Mark, SocialIcon, Wordmark } from "@/components/Brand";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";
import ThemeToggle from "@/components/ThemeToggle";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, site, social } from "@/lib/site";

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
  const image = { url: `/og/og-${lang}.png`, width: 1200, height: 630, alt: t.meta.ogAlt };
  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    applicationName: "CodeRoute",
    authors: [{ name: "CodeRoute", url: site.url }],
    creator: "CodeRoute",
    publisher: "CodeRoute",
    category: "technology",
    alternates: { canonical: `/${lang}`, languages: { en: "/en", ar: "/ar", "x-default": "/en" } },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `/${lang}`,
      siteName: "CodeRoute",
      locale: lang === "ar" ? "ar_BH" : "en_US",
      alternateLocale: lang === "ar" ? ["en_US"] : ["ar_BH"],
      type: "website",
      images: [image],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description, images: [image] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    formatDetection: { telephone: false },
  };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const other = lang === "ar" ? "en" : "ar";

  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const cookieTheme = (await cookies()).get("theme")?.value;
  const theme = cookieTheme === "dark" || cookieTheme === "light" ? cookieTheme : undefined;

  // Company details for search engines (shown in Google's knowledge panel and results).
  const orgId = `${site.url}/#organization`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": orgId,
        name: "CodeRoute",
        url: site.url,
        logo: `${site.url}/logo.png`,
        image: `${site.url}/og/og-en.png`,
        slogan: "Your route to digital.",
        description: getDictionary("en").meta.description,
        ...(site.email ? { email: site.email } : {}),
        ...(site.whatsapp ? { telephone: `+${site.whatsapp}` } : {}),
        sameAs: Object.values(social),
        knowsLanguage: ["en", "ar"],
        areaServed: [
          { "@type": "Country", name: "Bahrain" },
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Kuwait" },
          { "@type": "Country", name: "Qatar" },
          { "@type": "Country", name: "Oman" },
        ],
        knowsAbout: ["Web design", "Website development", "E-commerce", "Mobile app development", "AI chatbots", "WhatsApp Business API", "Workflow automation", "Cloud computing"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: getDictionary("en").services.items.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item.title, description: item.text },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: "CodeRoute",
        inLanguage: ["en", "ar"],
        publisher: { "@id": orgId },
      },
    ],
  };

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} data-theme={theme}>
      <body>
        <script
          type="application/ld+json"
          nonce={nonce}
          // JSON built from our own content; "<" is escaped so it can't close the script tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
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
              <Link href={`/${lang}#faq`}>{t.footer.faq}</Link>
              <Link href={`/${lang}#contact`}>{t.footer.contact}</Link>
              <Link href={`/${lang}/privacy`}>{t.footer.privacy}</Link>
              <Link href={`/${lang}/terms`}>{t.footer.terms}</Link>
            </nav>
            <ul className="footer-social" aria-label={t.footer.social}>
              <li><a href={social.linkedin} target="_blank" rel="noopener noreferrer me" aria-label={t.footer.follow.linkedin}><SocialIcon name="linkedin" /></a></li>
              <li><a href={social.instagram} target="_blank" rel="noopener noreferrer me" aria-label={t.footer.follow.instagram}><SocialIcon name="instagram" /></a></li>
              <li><a href={social.facebook} target="_blank" rel="noopener noreferrer me" aria-label={t.footer.follow.facebook}><SocialIcon name="facebook" /></a></li>
            </ul>
            <div>© {new Date().getFullYear()} <span className="latin" dir="ltr">CodeRoute</span>. {t.footer.rights}</div>
          </div>
        </footer>
        <Reveal />
        <BackToTop label={lang === "ar" ? "العودة إلى الأعلى" : "Back to top"} />
      </body>
    </html>
  );
}
