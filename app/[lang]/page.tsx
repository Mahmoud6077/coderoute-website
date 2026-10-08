import Link from "next/link";
import { notFound } from "next/navigation";
import QRCode from "qrcode";
import { Mark, ServiceIcon } from "@/components/Brand";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, site } from "@/lib/site";

const serviceIcons = ["assistant", "automation", "website", "app"] as const;

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  const demoUrl = site.demoWhatsapp ? `https://wa.me/${site.demoWhatsapp}` : null;
  // Generated on the server from our own setting, so the markup is safe to inline.
  const qrSvg = demoUrl
    ? await QRCode.toString(demoUrl, { type: "svg", margin: 0, color: { dark: "#14213D", light: "#F3EEE6" } })
    : null;

  return (
    <>
      <section className="container hero split center intro">
        <div>
          <h1 className="h1">
            {t.hero.titleStart} <span className="accent">{t.hero.titleAccent}</span>
          </h1>
          <p className="lead">{t.hero.lead}</p>
          <div className="actions">
            <Link className="btn btn-primary" href={`/${lang}#contact`}>{t.hero.primary}</Link>
            {demoUrl ? (
              <Link className="btn btn-outline" href={`/${lang}#demo`}>{t.hero.secondaryDemo}</Link>
            ) : (
              <Link className="btn btn-outline" href={`/${lang}#services`}>{t.hero.secondaryServices}</Link>
            )}
          </div>
          <p className="facts">{t.hero.facts}</p>
        </div>
        <div className="chat-wrap">
          <div className="chat">
            <div className="chat-head">
              <div className="chat-avatar"><Mark size={26} /></div>
              <div>
                <div className="chat-name">{t.chat.name}</div>
                <div className="chat-status">{t.chat.status}</div>
              </div>
            </div>
            <div className="chat-body">
              {t.chat.lines.map((line) => (
                <div
                  key={line.text}
                  className={`bubble ${line.from === "user" ? "bubble-user" : "bubble-bot"}${line.lang === "en" ? " latin" : ""}`}
                  lang={line.lang}
                  dir={line.lang === "ar" ? "rtl" : "ltr"}
                >
                  {line.text}
                </div>
              ))}
              <div className="chat-note">{t.chat.note}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="band">
        <div className="container section">
          <div className="eyebrow" data-reveal>{t.services.eyebrow}</div>
          <h2 className="h2" data-reveal>{t.services.title}</h2>
          <div className="grid-4">
            {t.services.items.map((item, i) => (
              <div className="card" key={item.title} data-reveal>
                <ServiceIcon name={serviceIcons[i]} />
                <h3 className="h3">{item.title}</h3>
                <p className="text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {t.work.items.length > 0 && (
        <section id="work" className="container section">
          <div className="eyebrow" data-reveal>{t.work.eyebrow}</div>
          <h2 className="h2" data-reveal>{t.work.title}</h2>
          <div className="work-grid">
            {t.work.items.map((item) => (
              <article className="work-card" key={item.url} data-reveal="zoom">
                <a className="work-shot" href={item.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" width={800} height={600} loading="lazy" decoding="async" />
                </a>
                <div className="work-body">
                  <div className="work-type">{item.type}</div>
                  <h3 className="h3"><span className="latin" dir="ltr">{item.name}</span></h3>
                  <p className="text">{item.text}</p>
                  <ul className="work-tags">
                    {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <a className="work-link" href={item.url} target="_blank" rel="noopener noreferrer">
                    {t.work.visit} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {demoUrl && qrSvg && (
        <section id="demo" className="demo">
          <div className="container section split center">
            <div>
              <div className="eyebrow" data-reveal>{t.demo.eyebrow}</div>
              <h2 className="h2" data-reveal>{t.demo.title}</h2>
              <p className="lead" data-reveal>{t.demo.lead}</p>
              <ul className="points" data-reveal>
                {t.demo.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
            <div>
              <div className="qr-card" data-reveal="zoom">
                <div className="qr" role="img" aria-label={t.demo.qrLabel} dangerouslySetInnerHTML={{ __html: qrSvg }} />
                <div className="qr-title">{t.demo.scan}</div>
                <a className="btn btn-primary btn-block" href={demoUrl} target="_blank" rel="noopener noreferrer">{t.demo.open}</a>
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="process" className="container section">
        <div className="eyebrow" data-reveal>{t.process.eyebrow}</div>
        <h2 className="h2" data-reveal>{t.process.title}</h2>
        <div className="grid-4">
          {t.process.steps.map((step, i) => (
            <div className="step" key={step.title} data-reveal>
              <div className="step-num" dir="ltr">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="h3">{step.title}</h3>
              <p className="text">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band-tint">
        <div className="container section split">
          <div>
            <div className="eyebrow" data-reveal>{t.why.eyebrow}</div>
            <h2 className="h2" data-reveal>{t.why.title}</h2>
          </div>
          <div className="why-list">
            {t.why.items.map((item) => (
              <div key={item.title} data-reveal>
                <h3 className="h3">{item.title}</h3>
                <p className="text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="container section split">
        <div>
          <div className="eyebrow" data-reveal>{t.about.eyebrow}</div>
          <h2 className="h2" data-reveal>{t.about.title}</h2>
        </div>
        <div className="prose" data-reveal>
          {t.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>

      <section id="contact" className="band">
        <div className="container section split">
          <div>
            <div className="eyebrow" data-reveal>{t.contact.eyebrow}</div>
            <h2 className="h2" data-reveal>{t.contact.title}</h2>
            <p className="lead" data-reveal>{t.contact.lead}</p>
            <div className="contact-links" data-reveal>
              {site.whatsapp && (
                <a className="btn btn-outline" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">{t.contact.whatsapp}</a>
              )}
              {site.email && (
                <a href={`mailto:${site.email}`}>{t.contact.email}: <span className="latin" dir="ltr">{site.email}</span></a>
              )}
            </div>
          </div>
          <div data-reveal="zoom">
            <ContactForm t={t.contact} lang={lang} />
          </div>
        </div>
      </section>
    </>
  );
}
