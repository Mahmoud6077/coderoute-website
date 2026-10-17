import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/site";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).terms;
  return {
    title: `${t.title} | CodeRoute`,
    description: t.description,
    alternates: { canonical: `/${lang}/terms`, languages: { en: "/en/terms", ar: "/ar/terms", "x-default": "/en/terms" } },
    openGraph: { title: `${t.title} | CodeRoute`, description: t.description, url: `/${lang}/terms` },
  };
}

export default async function Terms({ params }: { params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <LegalPage t={getDictionary(lang).terms} lang={lang} />;
}
