import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/site";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: `${t.privacy.title} | CodeRoute`, alternates: { canonical: `/${lang}/privacy`, languages: { en: "/en/privacy", ar: "/ar/privacy" } } };
}

export default async function Privacy({ params }: { params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang).privacy;

  return (
    <article className="container page">
      <h1>{t.title}</h1>
      <p>{t.updated}</p>
      {t.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.body.map((p) => <p key={p}>{p}</p>)}
        </section>
      ))}
      <Link className="back" href={`/${lang}`}>{t.back}</Link>
    </article>
  );
}
