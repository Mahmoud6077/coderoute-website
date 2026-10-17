import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/site";

export const metadata: Metadata = { title: "404 | CodeRoute", robots: { index: false, follow: true } };

export default async function NotFound() {
  // not-found pages don't receive route params; proxy.ts passes the language along instead.
  const fromProxy = (await headers()).get("x-locale") ?? "";
  const lang = isLocale(fromProxy) ? fromProxy : "en";
  const t = getDictionary(lang).notFound;

  return (
    <section className="container page not-found">
      <div className="not-found-code" dir="ltr">404</div>
      <h1>{t.title}</h1>
      <p>{t.text}</p>
      <Link className="btn btn-primary" href={`/${lang}`}>{t.home}</Link>
    </section>
  );
}
