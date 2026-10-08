import type { Locale, Need } from "./site";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { services: string; work: string; demo: string; process: string; about: string; otherLang: string; cta: string; main: string; theme: string };
  hero: { titleStart: string; titleAccent: string; lead: string; primary: string; secondaryDemo: string; secondaryServices: string; facts: string };
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
  footer: { services: string; contact: string; privacy: string; rights: string; label: string };
  privacy: { title: string; updated: string; back: string; sections: { heading: string; body: string[] }[] };
};

const en: Dictionary = {
  meta: {
    title: "CodeRoute | Websites, apps, AI assistants, and automation",
    description: "CodeRoute builds websites, mobile apps, AI assistants, and automated workflows that take the manual work off your team.",
  },
  nav: { services: "Services", work: "Work", demo: "Live demo", process: "How we work", about: "About", otherLang: "العربية", cta: "Book a free call", main: "Main", theme: "Switch between light and dark mode" },
  hero: {
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
      { title: "AI assistants and chatbots", text: "Answer customers on WhatsApp or your website, day and night, in English and Arabic." },
      { title: "Workflow automation", text: "Approvals, requests, and reports that run themselves, with a clear record of who did what." },
      { title: "Websites", text: "Fast, modern sites that look right on every phone and that your team can update themselves." },
      { title: "Mobile apps", text: "iPhone and Android apps from one codebase, for booking, ordering, loyalty, or your own staff." },
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
  footer: { services: "Services", contact: "Contact", privacy: "Privacy policy", rights: "All rights reserved.", label: "Footer" },
  privacy: {
    title: "Privacy policy",
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
    title: "CodeRoute | مواقع وتطبيقات ومساعدات ذكية وأتمتة",
    description: "تبني CodeRoute المواقع وتطبيقات الجوال والمساعدات الذكية وأنظمة الأتمتة التي ترفع العمل اليدوي عن فريقك.",
  },
  nav: { services: "الخدمات", work: "أعمالنا", demo: "العرض الحي", process: "طريقة عملنا", about: "من نحن", otherLang: "English", cta: "احجز مكالمة مجانية", main: "القائمة الرئيسية", theme: "التبديل بين الوضع الفاتح والداكن" },
  hero: {
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
      { title: "المساعدات الذكية وروبوتات المحادثة", text: "نرد على عملائك عبر واتساب أو موقعك على مدار الساعة، بالعربية والإنجليزية." },
      { title: "أتمتة سير العمل", text: "موافقات وطلبات وتقارير تعمل تلقائياً، مع سجل واضح لكل إجراء ومن قام به." },
      { title: "المواقع الإلكترونية", text: "مواقع سريعة وحديثة تظهر بشكل مثالي على كل هاتف، ويستطيع فريقك تحديثها بنفسه." },
      { title: "تطبيقات الجوال", text: "تطبيقات آيفون وأندرويد من شيفرة واحدة، للحجز والطلب وبرامج الولاء أو لموظفيك." },
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
  footer: { services: "الخدمات", contact: "تواصل معنا", privacy: "سياسة الخصوصية", rights: "جميع الحقوق محفوظة.", label: "روابط التذييل" },
  privacy: {
    title: "سياسة الخصوصية",
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
