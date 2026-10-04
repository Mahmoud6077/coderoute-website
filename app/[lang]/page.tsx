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
      <section className="container hero split center">
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
          <div className="eyebrow">{t.services.eyebrow}</div>
          <h2 className="h2">{t.services.title}</h2>
          <div className="grid-4">
            {t.services.items.map((item, i) => (
              <div className="card" key={item.title}>
                <ServiceIcon name={serviceIcons[i]} />
                <h3 className="h3">{item.title}</h3>
                <p className="text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {demoUrl && qrSvg && (
        <section id="demo" className="demo">
          <div className="container section split center">
            <div>
              <div className="eyebrow">{t.demo.eyebrow}</div>
              <h2 className="h2">{t.demo.title}</h2>
              <p className="lead">{t.demo.lead}</p>
              <ul className="points">
                {t.demo.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
            <div>
              <div className="qr-card">
                <div className="qr" role="img" aria-label={t.demo.qrLabel} dangerouslySetInnerHTML={{ __html: qrSvg }} />
                <div className="qr-title">{t.demo.scan}</div>
                <a className="btn btn-primary btn-block" href={demoUrl} target="_blank" rel="noopener noreferrer">{t.demo.open}</a>
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="process" className="container section">
        <div className="eyebrow">{t.process.eyebrow}</div>
        <h2 className="h2">{t.process.title}</h2>
        <div className="grid-4">
          {t.process.steps.map((step, i) => (
            <div className="step" key={step.title}>
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
            <div className="eyebrow">{t.why.eyebrow}</div>
            <h2 className="h2">{t.why.title}</h2>
          </div>
          <div className="why-list">
            {t.why.items.map((item) => (
              <div key={item.title}>
                <h3 className="h3">{item.title}</h3>
                <p className="text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="container section split">
        <div>
          <div className="eyebrow">{t.about.eyebrow}</div>
          <h2 className="h2">{t.about.title}</h2>
        </div>
        <div className="prose">
          {t.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>

      <section id="contact" className="band">
        <div className="container section split">
          <div>
            <div className="eyebrow">{t.contact.eyebrow}</div>
            <h2 className="h2">{t.contact.title}</h2>
            <p className="lead">{t.contact.lead}</p>
            <div className="contact-links">
              {site.whatsapp && (
                <a className="btn btn-outline" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">{t.contact.whatsapp}</a>
              )}
              {site.email && (
                <a href={`mailto:${site.email}`}>{t.contact.email}: <span className="latin" dir="ltr">{site.email}</span></a>
              )}
            </div>
          </div>
          <ContactForm t={t.contact} lang={lang} />
        </div>
      </section>
    </>
  );
}
