import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/site";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).privacy;
  return {
    title: `${t.title} | CodeRoute`,
    description: t.description,
    alternates: { canonical: `/${lang}/privacy`, languages: { en: "/en/privacy", ar: "/ar/privacy", "x-default": "/en/privacy" } },
    openGraph: { title: `${t.title} | CodeRoute`, description: t.description, url: `/${lang}/privacy` },
  };
}

export default async function Privacy({ params }: { params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <LegalPage t={getDictionary(lang).privacy} lang={lang} />;
}
