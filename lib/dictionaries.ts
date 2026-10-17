import type { Locale, Need } from "./site";

export type Dictionary = {
  meta: { title: string; description: string; keywords: string[]; ogAlt: string };
  nav: { services: string; work: string; demo: string; process: string; about: string; otherLang: string; cta: string; main: string; theme: string };
  hero: { eyebrow: string; titleStart: string; titleAccent: string; lead: string; primary: string; secondaryDemo: string; secondaryServices: string; facts: string };
  chat: { name: string; status: string; note: string; lines: { from: "user" | "bot"; text: string; lang: Locale }[] };
  services: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  work: { eyebrow: string; title: string; visit: string; items: { name: string; type: string; text: string; tags: string[]; url: string; image: string }[] };
  demo: { eyebrow: string; title: string; lead: string; points: string[]; scan: string; open: string; qrLabel: string };
  process: { eyebrow: string; title: string; steps: { title: string; text: string }[] };
  why: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  about: { eyebrow: string; title: string; paragraphs: string[] };
  contact: {
    eyebrow: string; title: string; lead: string; whatsapp: string; email: string;
    name: string; namePh: string; contact: string; contactPh: string; need: string; message: string; messagePh: string;
    needs: Record<Need, string>; send: string; sending: string; success: string;
    errors: { invalid: string; rate: string; unavailable: string; generic: string };
    privacyNote: string;
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  footer: { services: string; faq: string; contact: string; privacy: string; terms: string; rights: string; label: string; social: string; follow: { linkedin: string; instagram: string; facebook: string } };
  privacy: LegalPage;
  terms: LegalPage;
  notFound: { title: string; text: string; home: string };
};

export type LegalPage = { title: string; description: string; updated: string; back: string; sections: { heading: string; body: string[] }[] };

const en: Dictionary = {
  meta: {
    title: "CodeRoute | Web Design, App Development and AI Chatbots",
    description: "Website design, online stores, iPhone and Android apps, WhatsApp AI chatbots and workflow automation, in English and Arabic. Book a free consultation.",
    keywords: [
      "web design", "website design", "website development", "web development company", "company website", "e-commerce website", "online store",
      "mobile app development", "iPhone app", "Android app", "app developer", "AI chatbot", "WhatsApp chatbot", "WhatsApp Business API", "AI assistant",
      "workflow automation", "business process automation", "custom software", "software company", "digital transformation", "Arabic website", "bilingual website",
    ],
    ogAlt: "CodeRoute: Your route to digital. Websites, mobile apps, AI chatbots and workflow automation.",
  },
  nav: { services: "Services", work: "Work", demo: "Live demo", process: "How we work", about: "About", otherLang: "العربية", cta: "Book a free call", main: "Main", theme: "Switch between light and dark mode" },
  hero: {
    eyebrow: "Web design · App development · AI chatbots · Automation",
    titleStart: "Your route to",
    titleAccent: "digital.",
    lead: "We build websites, apps, AI assistants, and automated workflows that take the manual work off your team and keep your business moving.",
    primary: "Book a free call",
    secondaryDemo: "Try the live demo",
    secondaryServices: "See what we do",
    facts: "English and Arabic · AWS and Azure certified · You talk to the engineers",
  },
  chat: {
    name: "Clinic assistant",
    status: "Demo · replies in seconds",
    note: "Booking added to the clinic calendar",
    lines: [
      { from: "user", text: "Hi, do you have an appointment tomorrow evening?", lang: "en" },
      { from: "bot", text: "Yes. Tomorrow we have 5:30 pm and 7:00 pm free. Which one suits you?", lang: "en" },
      { from: "user", text: "الساعة سبع زين، كم سعر التنظيف؟", lang: "ar" },
      { from: "bot", text: "تم حجز موعدك باجر الساعة ٧ مساءً. بنرسل لك تفاصيل السعر الحين.", lang: "ar" },
    ],
  },
  services: {
    eyebrow: "What we do",
    title: "Four services. One team that builds them all.",
    items: [
      { title: "AI chatbots and assistants", text: "WhatsApp and website chatbots that answer customers day and night, in English and Arabic, and take bookings and orders." },
      { title: "Workflow automation", text: "Business process automation for approvals, requests, and reports, with a clear record of who did what." },
      { title: "Website design and development", text: "Fast, modern company websites and online stores that look right on every phone and that your team can update themselves." },
      { title: "Mobile app development", text: "iPhone and Android apps from one codebase, for booking, ordering, loyalty, or your own staff." },
    ],
  },
  work: {
    eyebrow: "Our work",
    title: "Recent projects.",
    visit: "Visit the site",
    items: [
      {
        name: "Melyia",
        type: "Online store",
        text: "A bilingual online store for Malaysian raw honey, with a product catalogue, shopping cart, customer accounts, and light and dark themes.",
        tags: ["E-commerce", "Malay and English", "Light and dark mode"],
        url: "https://melyia-honey.byduty.workers.dev/",
        image: "/work/melyia.jpg",
      },
    ],
  },
  demo: {
    eyebrow: "Live demo",
    title: "Don't take our word for it. Chat with it.",
    lead: "Scan the code and message our demo clinic assistant on WhatsApp. Ask about prices, book an appointment, switch to Arabic halfway through. This is what your customers would get.",
    points: ["Answers from your own price list and FAQs", "Takes bookings and requests on its own", "Hands over to your team when a person is needed"],
    scan: "Scan to start chatting",
    open: "Open in WhatsApp",
    qrLabel: "QR code that opens the demo assistant in WhatsApp",
  },
  process: {
    eyebrow: "How we work",
    title: "A clear route from first call to launch.",
    steps: [
      { title: "Discover", text: "We learn how your work runs today and agree on the problem worth solving first. You get a fixed scope, price, and timeline." },
      { title: "Design", text: "You see the screens and flows before any code is written. Changes are cheap here, so this is where we get it right." },
      { title: "Build", text: "We build in short cycles and show you working progress every week, with a short written update." },
      { title: "Launch and support", text: "We go live, train your staff, and hand over full documentation. Monthly plans keep everything secure and running." },
    ],
  },
  why: {
    eyebrow: "Why CodeRoute",
    title: "Small team. Senior engineers. No middlemen.",
    items: [
      { title: "You talk to the engineers", text: "The people who scope your project are the people who build it." },
      { title: "English and Arabic", text: "We work in both languages, on site or remotely." },
      { title: "Cloud-certified", text: "AWS and Microsoft Azure certified, and your data can stay in the region." },
      { title: "Clear scope, clear price", text: "Fixed proposals with agreed deliverables. No surprises on the invoice." },
      { title: "You own what we build", text: "The code, designs, and accounts are yours once the project is paid." },
      { title: "We stay after launch", text: "Support plans cover hosting, updates, security, and small improvements." },
    ],
  },
  about: {
    eyebrow: "About us",
    title: "Engineers who like making work easier.",
    paragraphs: [
      "CodeRoute is led by senior engineers. We started it because too many businesses still run on spreadsheets, paper, and endless WhatsApp messages, and the technology to fix that shouldn't be reserved for the largest companies.",
      "We keep the team small on purpose, so every project gets senior attention from the first call to long after launch.",
    ],
  },
  contact: {
    eyebrow: "Let's talk",
    title: "Tell us what slows your work down.",
    lead: "We'll show you the route to fix it. The first call is free, and you'll hear back within one working day.",
    whatsapp: "Message us on WhatsApp",
    email: "Email",
    name: "Your name",
    namePh: "Fatima Al-Sayed",
    contact: "Phone or email",
    contactPh: "name@company.com",
    need: "What do you need help with?",
    message: "Tell us a little more",
    messagePh: "We answer the same customer questions on WhatsApp all day",
    needs: { assistant: "AI assistant or chatbot", automation: "Workflow automation", website: "Website", app: "Mobile app", unsure: "Not sure yet" },
    send: "Send message",
    sending: "Sending…",
    success: "Message sent. We'll get back to you within one working day.",
    errors: {
      invalid: "Check your name and your phone or email, then try again.",
      rate: "Too many messages from this connection. Try again in a few minutes.",
      unavailable: "The form isn't available right now. Reach us on WhatsApp or by email.",
      generic: "Couldn't send your message. Try again.",
    },
    privacyNote: "We use your details only to reply to you.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions we hear often.",
    items: [
      { q: "How much does a website or app cost?", a: "It depends on what it needs to do. After a free call, we send a written proposal with a fixed price, scope, and timeline, so you know the full cost before any work starts. There are no hidden fees." },
      { q: "How long does it take to build?", a: "A company website usually takes 2 to 4 weeks, an online store 4 to 8 weeks, and a WhatsApp AI assistant 2 to 4 weeks. Mobile apps and custom systems typically take 2 to 4 months. Your proposal includes an exact timeline." },
      { q: "Can you build a WhatsApp chatbot that speaks Arabic and English?", a: "Yes. We build AI assistants on the official WhatsApp Business platform and on websites. They answer from your own prices and FAQs, take bookings and orders, switch between Arabic and English, and hand the chat to your team when a person is needed." },
      { q: "Do you build iPhone and Android apps?", a: "Yes. We build apps for iPhone and Android from one codebase, which keeps the cost and maintenance down, and we publish them to the App Store and Google Play for you." },
      { q: "Will we own the website, app, and code?", a: "Yes. Once the project is paid, the code, designs, domain, and accounts are yours. We set them up in your name from the start." },
      { q: "Can you redesign or improve our existing website or system?", a: "Yes. We can redesign an existing website, make it faster, add features, connect it to your other systems, or automate the manual steps around it." },
      { q: "What happens after launch?", a: "We train your team and hand over full documentation. Optional monthly support plans cover hosting, security updates, backups, and small improvements." },
      { q: "Will you sign an NDA?", a: "Yes. We're happy to sign a non-disclosure agreement before you share any details about your business or your idea." },
    ],
  },
  footer: {
    services: "Services", faq: "FAQ", contact: "Contact", privacy: "Privacy policy", terms: "Terms of service", rights: "All rights reserved.", label: "Footer",
    social: "Social media", follow: { linkedin: "CodeRoute on LinkedIn", instagram: "CodeRoute on Instagram", facebook: "CodeRoute on Facebook" },
  },
  notFound: { title: "Page not found", text: "The page you're looking for doesn't exist or has moved.", home: "Back to the homepage" },
  terms: {
    title: "Terms of service",
    description: "The terms that apply when you use the CodeRoute website.",
    updated: "Last updated: October 2026",
    back: "Back to the homepage",
    sections: [
      { heading: "About these terms", body: ["These terms apply to your use of coderoutebh.com. By using the site, you agree to them."] },
      { heading: "Our services", body: ["This site describes our services in general. Any project we do for you is covered by a separate written proposal or agreement that sets out the scope, price, timeline, payment terms, and ownership. If that agreement differs from these terms, the agreement applies."] },
      { heading: "Prices and timelines", body: ["Timelines, examples, and descriptions on this site are general guidance, not an offer. A price or timeline is binding only once it's in a written proposal accepted by both sides."] },
      { heading: "Our content and brand", body: ["The content, design, logo, and CodeRoute name on this site belong to us. You're welcome to share links to the site, but don't copy or reuse its content or branding without our written permission. Client projects shown here belong to their owners and are shown with their permission."] },
      { heading: "Using the site", body: ["Don't misuse the site, for example by trying to break its security, overloading it, or sending spam through the contact form."] },
      { heading: "Links to other sites", body: ["The site links to other websites, such as projects we've built and our social media pages. We aren't responsible for their content or for how they handle your data."] },
      { heading: "No guarantee", body: ["We work to keep the site accurate and available, but it's provided as it is, and we can't guarantee it will always be error-free or uninterrupted."] },
      { heading: "Liability", body: ["As far as the law allows, we aren't liable for any loss that results from using this website. This doesn't limit anything agreed in a signed project agreement."] },
      { heading: "Privacy", body: ["How we handle the details you send us is explained in our privacy policy."] },
      { heading: "Changes", body: ["We may update these terms from time to time. The date at the top shows the latest version."] },
      { heading: "Contact", body: ["Questions about these terms? Contact us using the details on the homepage."] },
    ],
  },
  privacy: {
    title: "Privacy policy",
    description: "How CodeRoute handles the details you send through this website.",
    updated: "Last updated: October 2026",
    back: "Back to the homepage",
    sections: [
      { heading: "What we collect", body: ["When you send the contact form, we receive the name, the phone number or email address, and the message you enter. We don't collect anything else about you through this website, and we don't use advertising or tracking cookies."] },
      { heading: "How we use it", body: ["We use your details only to reply to your enquiry and to discuss the work you asked about. We don't sell your details or share them for marketing."] },
      { heading: "Cookies", body: ["This site stores one small cookie to remember whether you chose light or dark mode. It holds no personal information."] },
      { heading: "Service providers", body: ["The website is hosted by a hosting provider, and form messages are delivered by an email delivery service. Both process the data only to run the site and deliver your message."] },
      { heading: "How long we keep it", body: ["We keep enquiry messages for as long as needed to answer you and to maintain a record of our business conversations, then delete them."] },
      { heading: "Your choices", body: ["You can ask us for a copy of your details, or to correct or delete them, at any time. Contact us using the details on the homepage."] },
    ],
  },
};

const ar: Dictionary = {
  meta: {
    title: "CodeRoute | تصميم مواقع وبرمجة تطبيقات وشات بوت ذكي",
    description: "تصميم وبرمجة المواقع والمتاجر الإلكترونية وتطبيقات آيفون وأندرويد، وشات بوت واتساب بالذكاء الاصطناعي وأتمتة سير العمل، بالعربية والإنجليزية. احجز استشارة مجانية.",
    keywords: [
      "تصميم مواقع", "تصميم مواقع إلكترونية", "برمجة مواقع", "تصميم موقع شركة", "شركة تصميم مواقع", "شركة برمجة", "تصميم متجر إلكتروني", "متجر إلكتروني",
      "برمجة تطبيقات", "تصميم تطبيقات", "تطبيقات الجوال", "تطبيق آيفون", "تطبيق أندرويد", "شات بوت", "شات بوت واتساب", "روبوت محادثة", "مساعد ذكي",
      "الذكاء الاصطناعي", "أتمتة الأعمال", "أتمتة سير العمل", "أنظمة إدارة", "برمجيات خاصة", "التحول الرقمي", "موقع عربي",
    ],
    ogAlt: "CodeRoute: طريقك نحو التحوّل الرقمي. مواقع إلكترونية وتطبيقات جوال ومساعدات ذكية وأتمتة سير العمل.",
  },
  nav: { services: "الخدمات", work: "أعمالنا", demo: "العرض الحي", process: "طريقة عملنا", about: "من نحن", otherLang: "English", cta: "احجز مكالمة مجانية", main: "القائمة الرئيسية", theme: "التبديل بين الوضع الفاتح والداكن" },
  hero: {
    eyebrow: "تصميم المواقع · برمجة التطبيقات · الشات بوت · الأتمتة",
    titleStart: "طريقك نحو",
    titleAccent: "التحوّل الرقمي.",
    lead: "نبني المواقع والتطبيقات والمساعدات الذكية وأنظمة الأتمتة التي ترفع العمل اليدوي عن فريقك وتُبقي أعمالك في حركة مستمرة.",
    primary: "احجز مكالمة مجانية",
    secondaryDemo: "جرّب العرض الحي",
    secondaryServices: "تعرّف على خدماتنا",
    facts: "بالعربية والإنجليزية · شهادات AWS و Azure · تتحدث مباشرة مع المهندسين",
  },
  chat: {
    name: "مساعد العيادة",
    status: "عرض تجريبي · يرد خلال ثوانٍ",
    note: "تمت إضافة الحجز إلى تقويم العيادة",
    lines: [
      { from: "user", text: "السلام عليكم، عندكم موعد باجر المسا؟", lang: "ar" },
      { from: "bot", text: "وعليكم السلام! إي نعم، باجر متوفر الساعة ٥:٣٠ أو ٧:٠٠ مساءً. أي وقت يناسبك؟", lang: "ar" },
      { from: "user", text: "7 pm works. How much is a cleaning?", lang: "en" },
      { from: "bot", text: "You're booked for tomorrow at 7:00 pm. I'll send the price details now.", lang: "en" },
    ],
  },
  services: {
    eyebrow: "ماذا نقدّم",
    title: "أربع خدمات. وفريق واحد ينفّذها كلها.",
    items: [
      { title: "شات بوت ومساعدات ذكية", text: "روبوتات محادثة على واتساب وموقعك ترد على عملائك على مدار الساعة بالعربية والإنجليزية، وتستقبل الحجوزات والطلبات." },
      { title: "أتمتة سير العمل", text: "أتمتة إجراءات العمل من موافقات وطلبات وتقارير، مع سجل واضح لكل إجراء ومن قام به." },
      { title: "تصميم وبرمجة المواقع", text: "مواقع شركات ومتاجر إلكترونية سريعة وحديثة تظهر بشكل مثالي على كل هاتف، ويستطيع فريقك تحديثها بنفسه." },
      { title: "برمجة تطبيقات الجوال", text: "تطبيقات آيفون وأندرويد من شيفرة واحدة، للحجز والطلب وبرامج الولاء أو لموظفيك." },
    ],
  },
  work: {
    eyebrow: "أعمالنا",
    title: "مشاريع حديثة.",
    visit: "زيارة الموقع",
    items: [
      {
        name: "Melyia",
        type: "متجر إلكتروني",
        text: "متجر إلكتروني ثنائي اللغة لبيع العسل الماليزي الخام، يضم كتالوج منتجات وسلة مشتريات وحسابات للعملاء ووضعين فاتح وداكن.",
        tags: ["تجارة إلكترونية", "الملايوية والإنجليزية", "وضع فاتح وداكن"],
        url: "https://melyia-honey.byduty.workers.dev/",
        image: "/work/melyia.jpg",
      },
    ],
  },
  demo: {
    eyebrow: "عرض حي",
    title: "لا تكتفِ بكلامنا. جرّبه بنفسك.",
    lead: "امسح الرمز وراسل مساعد العيادة التجريبي على واتساب. اسأل عن الأسعار، احجز موعداً، وانتقل إلى الإنجليزية في منتصف المحادثة. هذا ما سيحصل عليه عملاؤك.",
    points: ["يجيب من قائمة أسعارك وأسئلتك الشائعة", "يستقبل الحجوزات والطلبات تلقائياً", "يحوّل المحادثة إلى فريقك عند الحاجة إلى موظف"],
    scan: "امسح الرمز وابدأ المحادثة",
    open: "افتح في واتساب",
    qrLabel: "رمز QR يفتح المساعد التجريبي في واتساب",
  },
  process: {
    eyebrow: "طريقة عملنا",
    title: "طريق واضح من أول مكالمة حتى الإطلاق.",
    steps: [
      { title: "الاستكشاف", text: "نتعرف على طريقة سير عملك اليوم ونتفق على المشكلة الأهم لحلّها أولاً. ثم تحصل على نطاق عمل وسعر وجدول زمني محدد." },
      { title: "التصميم", text: "ترى الشاشات وخطوات الاستخدام قبل كتابة أي شيفرة. التعديل هنا سهل وغير مكلف، ولذلك نضبط التفاصيل في هذه المرحلة." },
      { title: "التنفيذ", text: "نبني على مراحل قصيرة ونعرض عليك تقدماً فعلياً كل أسبوع، مع تقرير مكتوب مختصر." },
      { title: "الإطلاق والدعم", text: "نطلق النظام وندرّب موظفيك ونسلّمك التوثيق الكامل. وخطط الدعم الشهرية تُبقي كل شيء آمناً ويعمل." },
    ],
  },
  why: {
    eyebrow: "لماذا CodeRoute",
    title: "فريق صغير. مهندسون خبراء. بلا وسطاء.",
    items: [
      { title: "تتحدث مع المهندسين", text: "من يحدد نطاق مشروعك هو نفسه من ينفّذه." },
      { title: "العربية والإنجليزية", text: "نعمل باللغتين، حضورياً أو عن بُعد." },
      { title: "شهادات سحابية معتمدة", text: "حاصلون على شهادات AWS و Microsoft Azure، ويمكن أن تبقى بياناتك داخل المنطقة." },
      { title: "نطاق واضح وسعر واضح", text: "عروض ثابتة بمخرجات متفق عليها. لا مفاجآت في الفاتورة." },
      { title: "ما نبنيه ملك لك", text: "الشيفرة والتصاميم والحسابات لك بعد سداد قيمة المشروع." },
      { title: "نبقى معك بعد الإطلاق", text: "خطط الدعم تشمل الاستضافة والتحديثات والأمان والتحسينات الصغيرة." },
    ],
  },
  about: {
    eyebrow: "من نحن",
    title: "مهندسون يحبون تسهيل العمل.",
    paragraphs: [
      "يقود CodeRoute مهندسون خبراء. أسسنا الشركة لأن كثيراً من الأعمال ما زالت تعتمد على جداول البيانات والورق ورسائل واتساب التي لا تنتهي، والتقنية التي تحل ذلك لا ينبغي أن تكون حكراً على الشركات الكبرى.",
      "نُبقي الفريق صغيراً عن قصد، ليحظى كل مشروع باهتمام مهندسين خبراء من أول مكالمة وحتى بعد الإطلاق بوقت طويل.",
    ],
  },
  contact: {
    eyebrow: "تواصل معنا",
    title: "أخبرنا ما الذي يؤخّر عملك.",
    lead: "وسنريك الطريق لحلّه. المكالمة الأولى مجانية، وسنرد عليك خلال يوم عمل واحد.",
    whatsapp: "راسلنا على واتساب",
    email: "البريد الإلكتروني",
    name: "اسمك",
    namePh: "فاطمة السيد",
    contact: "الهاتف أو البريد الإلكتروني",
    contactPh: "name@company.com",
    need: "بماذا نساعدك؟",
    message: "أخبرنا أكثر",
    messagePh: "نجيب عن الأسئلة نفسها على واتساب طوال اليوم",
    needs: { assistant: "مساعد ذكي أو روبوت محادثة", automation: "أتمتة سير العمل", website: "موقع إلكتروني", app: "تطبيق جوال", unsure: "لست متأكداً بعد" },
    send: "إرسال الرسالة",
    sending: "جارٍ الإرسال…",
    success: "تم إرسال رسالتك. سنرد عليك خلال يوم عمل واحد.",
    errors: {
      invalid: "تحقق من اسمك ومن رقم الهاتف أو البريد الإلكتروني ثم أعد المحاولة.",
      rate: "رسائل كثيرة من هذا الاتصال. أعد المحاولة بعد بضع دقائق.",
      unavailable: "النموذج غير متاح حالياً. تواصل معنا عبر واتساب أو البريد الإلكتروني.",
      generic: "تعذّر إرسال رسالتك. أعد المحاولة.",
    },
    privacyNote: "نستخدم بياناتك للرد عليك فقط.",
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "أسئلة نسمعها كثيراً.",
    items: [
      { q: "كم تكلفة تصميم موقع أو تطبيق؟", a: "تعتمد التكلفة على ما يحتاج إليه المشروع. بعد مكالمة مجانية نرسل لك عرضاً مكتوباً بسعر ثابت ونطاق عمل وجدول زمني محدد، لتعرف التكلفة الكاملة قبل بدء أي عمل، ومن دون أي رسوم خفية." },
      { q: "كم يستغرق تنفيذ المشروع؟", a: "يستغرق موقع الشركة عادةً من أسبوعين إلى أربعة أسابيع، والمتجر الإلكتروني من أربعة إلى ثمانية أسابيع، والمساعد الذكي على واتساب من أسبوعين إلى أربعة أسابيع. أما تطبيقات الجوال والأنظمة الخاصة فتستغرق عادةً من شهرين إلى أربعة أشهر. ويتضمن العرض جدولاً زمنياً دقيقاً." },
      { q: "هل تبنون شات بوت على واتساب يتحدث العربية والإنجليزية؟", a: "نعم. نبني المساعدات الذكية على منصة واتساب للأعمال الرسمية وعلى المواقع الإلكترونية. تجيب من أسعارك وأسئلتك الشائعة، وتستقبل الحجوزات والطلبات، وتنتقل بين العربية والإنجليزية، وتحوّل المحادثة إلى فريقك عند الحاجة إلى موظف." },
      { q: "هل تبرمجون تطبيقات آيفون وأندرويد؟", a: "نعم. نبني تطبيقات آيفون وأندرويد من شيفرة واحدة، مما يخفض التكلفة والصيانة، وننشرها لك على متجر App Store و Google Play." },
      { q: "هل سنملك الموقع والتطبيق والشيفرة؟", a: "نعم. بعد سداد قيمة المشروع تصبح الشيفرة والتصاميم والنطاق والحسابات ملكاً لك، ونسجلها باسمك من البداية." },
      { q: "هل يمكنكم تطوير موقعنا أو نظامنا الحالي؟", a: "نعم. يمكننا إعادة تصميم موقعك الحالي، وتسريعه، وإضافة مزايا جديدة، وربطه بأنظمتك الأخرى، أو أتمتة الخطوات اليدوية المرتبطة به." },
      { q: "ماذا يحدث بعد الإطلاق؟", a: "ندرّب فريقك ونسلّمك التوثيق الكامل. وتشمل خطط الدعم الشهرية الاختيارية الاستضافة والتحديثات الأمنية والنسخ الاحتياطي والتحسينات الصغيرة." },
      { q: "هل توقّعون اتفاقية عدم إفصاح؟", a: "نعم. يسعدنا توقيع اتفاقية عدم إفصاح قبل أن تشاركنا أي تفاصيل عن عملك أو فكرتك." },
    ],
  },
  footer: {
    services: "الخدمات", faq: "الأسئلة الشائعة", contact: "تواصل معنا", privacy: "سياسة الخصوصية", terms: "شروط الاستخدام", rights: "جميع الحقوق محفوظة.", label: "روابط التذييل",
    social: "وسائل التواصل الاجتماعي", follow: { linkedin: "CodeRoute على لينكدإن", instagram: "CodeRoute على إنستغرام", facebook: "CodeRoute على فيسبوك" },
  },
  notFound: { title: "الصفحة غير موجودة", text: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.", home: "العودة إلى الصفحة الرئيسية" },
  terms: {
    title: "شروط الاستخدام",
    description: "الشروط التي تنطبق عند استخدامك لموقع CodeRoute.",
    updated: "آخر تحديث: أكتوبر 2026",
    back: "العودة إلى الصفحة الرئيسية",
    sections: [
      { heading: "حول هذه الشروط", body: ["تنطبق هذه الشروط على استخدامك لموقع coderoutebh.com. وباستخدامك للموقع فإنك توافق عليها."] },
      { heading: "خدماتنا", body: ["يصف هذا الموقع خدماتنا بشكل عام. وأي مشروع ننفّذه لك يخضع لعرض أو اتفاقية مكتوبة منفصلة تحدد نطاق العمل والسعر والجدول الزمني وشروط الدفع والملكية. وإذا اختلفت تلك الاتفاقية عن هذه الشروط، تُطبَّق الاتفاقية."] },
      { heading: "الأسعار والمدد الزمنية", body: ["المدد الزمنية والأمثلة والأوصاف الواردة في هذا الموقع إرشادات عامة وليست عرضاً ملزماً. ولا يصبح السعر أو الجدول الزمني ملزماً إلا بعد ورودهما في عرض مكتوب يوافق عليه الطرفان."] },
      { heading: "محتوانا وعلامتنا التجارية", body: ["المحتوى والتصميم والشعار واسم CodeRoute في هذا الموقع ملك لنا. يمكنك مشاركة روابط الموقع، لكن لا يجوز نسخ محتواه أو علامته التجارية أو إعادة استخدامهما دون إذن مكتوب منا. أما مشاريع العملاء المعروضة هنا فهي ملك لأصحابها وتُعرض بإذنهم."] },
      { heading: "استخدام الموقع", body: ["لا تُسئ استخدام الموقع، كأن تحاول اختراق أمانه أو إثقاله بالطلبات أو إرسال رسائل مزعجة عبر نموذج التواصل."] },
      { heading: "روابط لمواقع أخرى", body: ["يحتوي الموقع على روابط لمواقع أخرى، مثل مشاريع نفذناها وصفحاتنا على وسائل التواصل الاجتماعي. ولسنا مسؤولين عن محتواها أو عن طريقة تعاملها مع بياناتك."] },
      { heading: "إخلاء المسؤولية", body: ["نحرص على أن يكون الموقع دقيقاً ومتاحاً، لكنه يُقدَّم كما هو، ولا نضمن أن يكون خالياً من الأخطاء أو متاحاً دون انقطاع في كل الأوقات."] },
      { heading: "حدود المسؤولية", body: ["في الحدود التي يسمح بها القانون، لسنا مسؤولين عن أي خسارة تنتج عن استخدام هذا الموقع. ولا يقيّد ذلك أي شيء متفق عليه في اتفاقية مشروع موقّعة."] },
      { heading: "الخصوصية", body: ["توضح سياسة الخصوصية طريقة تعاملنا مع البيانات التي ترسلها إلينا."] },
      { heading: "التعديلات", body: ["قد نحدّث هذه الشروط من وقت لآخر، ويوضح التاريخ في أعلى الصفحة أحدث نسخة."] },
      { heading: "التواصل", body: ["لديك سؤال حول هذه الشروط؟ تواصل معنا عبر البيانات الموجودة في الصفحة الرئيسية."] },
    ],
  },
  privacy: {
    title: "سياسة الخصوصية",
    description: "كيف تتعامل CodeRoute مع البيانات التي ترسلها عبر هذا الموقع.",
    updated: "آخر تحديث: أكتوبر 2026",
    back: "العودة إلى الصفحة الرئيسية",
    sections: [
      { heading: "ما الذي نجمعه", body: ["عند إرسال نموذج التواصل نستلم الاسم ورقم الهاتف أو البريد الإلكتروني والرسالة التي تكتبها. لا نجمع أي بيانات أخرى عنك عبر هذا الموقع، ولا نستخدم ملفات تعريف ارتباط إعلانية أو تتبعية."] },
      { heading: "كيف نستخدمه", body: ["نستخدم بياناتك للرد على استفسارك ومناقشة العمل الذي سألت عنه فقط. لا نبيع بياناتك ولا نشاركها لأغراض التسويق."] },
      { heading: "ملفات تعريف الارتباط", body: ["يحفظ الموقع ملف تعريف ارتباط واحداً صغيراً لتذكّر اختيارك للوضع الفاتح أو الداكن، ولا يحتوي على أي بيانات شخصية."] },
      { heading: "مزودو الخدمة", body: ["يستضيف الموقع مزود استضافة، وتصل رسائل النموذج عبر خدمة لإرسال البريد الإلكتروني. يعالج الطرفان البيانات لتشغيل الموقع وإيصال رسالتك فقط."] },
      { heading: "مدة الاحتفاظ", body: ["نحتفظ برسائل الاستفسار للمدة اللازمة للرد عليك وللاحتفاظ بسجل لمحادثات العمل، ثم نحذفها."] },
      { heading: "خياراتك", body: ["يمكنك في أي وقت طلب نسخة من بياناتك أو تصحيحها أو حذفها. تواصل معنا عبر البيانات الموجودة في الصفحة الرئيسية."] },
    ],
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
