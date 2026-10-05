# CodeRoute website

Next.js 16 (App Router, TypeScript). English and Arabic (right-to-left), light and dark mode, contact form, optional live demo section.

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

`npm run build` then `npm start` runs the production build.

## Settings (environment variables)

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public address of the site, no trailing slash. Used for links, the sitemap, and search engines. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Your WhatsApp number, digits only. Empty hides the WhatsApp button. |
| `NEXT_PUBLIC_DEMO_WHATSAPP_NUMBER` | WhatsApp number of the demo assistant. Empty hides the whole live demo section and its menu link. The QR code is generated from it. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email shown in the contact section. Empty hides it. |
| `ZEPTOMAIL_API_KEY` | Send Mail API key from Zoho (Admin Console > Transactional Emails > agent > SMTP/API). |
| `CONTACT_TO_EMAIL` | Inbox that receives form messages. |
| `CONTACT_FROM_EMAIL` | Verified sender on your domain, e.g. `website@yourdomain.com`. |

Until the three mail settings are filled in, the form tells visitors to use WhatsApp or email instead.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com choose Add New > Project and import the repository. The defaults are correct.
3. Add the variables above under Settings > Environment Variables, then redeploy.
4. Add your domain under Settings > Domains and follow the DNS steps. HTTPS is automatic.
5. Set `NEXT_PUBLIC_SITE_URL` to the final domain and redeploy.

## Where things are

- `lib/dictionaries.ts`: all text in English and Arabic.
- `app/globals.css`: colours (light and dark tokens at the top) and all styling.
- `app/[lang]/page.tsx`: the homepage sections. `app/[lang]/layout.tsx`: header and footer.
- `app/[lang]/privacy/page.tsx`: privacy policy page.
- `app/api/contact/route.ts`: contact form handler.
- `proxy.ts`: language redirect and the Content-Security-Policy.
- `next.config.mjs`: the other security headers.

## Security measures in place

- Content-Security-Policy with a fresh nonce per request: only this site's own scripts, styles, fonts, and images load. No third-party scripts, trackers, or external fonts.
- HSTS, no framing (clickjacking protection), no MIME sniffing, strict referrer policy, camera/microphone/location disabled.
- Contact form: accepts posts only from this site's own origin, JSON only, size limit, input validation and length limits, control characters stripped, hidden honeypot field for bots, 5 messages per 10 minutes per address, email sent as plain text, secrets kept server-side.
- One cookie only (light/dark choice), no personal data in it.
- `npm audit` reported 0 known vulnerabilities at build time.

## Before going live

- The form rate limit is kept in memory per server instance. On Vercel, also turn on the Firewall's rate limiting or bot protection for `/api/contact`.
- Turn on two-factor authentication for GitHub, Vercel, Zoho, and the domain registrar. Account takeover is the most likely way a site like this gets compromised.
- Enable Dependabot (or run `npm audit` monthly) to keep packages patched.
- Have the privacy policy reviewed against Bahrain's Personal Data Protection Law.
- Have a native speaker read the Arabic text once.
