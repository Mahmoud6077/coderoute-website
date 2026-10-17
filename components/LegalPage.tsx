import Link from "next/link";
import type { LegalPage as LegalPageContent } from "@/lib/dictionaries";
import type { Locale } from "@/lib/site";

export default function LegalPage({ t, lang }: { t: LegalPageContent; lang: Locale }) {
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
