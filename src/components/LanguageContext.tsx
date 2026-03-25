"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "bg";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

/* ═══════════════════════════════════════════
   TRANSLATIONS
   ═══════════════════════════════════════════ */

const translations: Record<string, Record<Lang, string>> = {
  // ── Navbar ──
  "nav.goggles": { en: "Goggles", bg: "Очила" },
  "nav.app": { en: "App", bg: "Приложение" },
  "nav.dirt": { en: "Dirt", bg: "Мото" },
  "nav.alpine": { en: "Alpine", bg: "Сняг" },
  "nav.about": { en: "About", bg: "За нас" },
  "nav.preorder": { en: "Pre-Order", bg: "Предварителна поръчка" },
  "nav.preorder_now": { en: "Pre-Order Now", bg: "Поръчай сега" },

  // ── SplitHero — Left (App) ──
  "hero.app.badge": { en: "The Always-On Social Radar", bg: "Винаги активен социален радар" },
  "hero.app.title1": { en: "Your Squad.", bg: "Твоят отбор." },
  "hero.app.title2": { en: "Always On Radar.", bg: "Винаги на радара." },
  "hero.app.desc": {
    en: "Passively tracks your speed, airtime, and wipeouts. Maps your crew in real-time on 3D terrain. No buttons. No distractions.",
    bg: "Пасивно проследява скоростта, времето във въздуха и падания. Проследява екипа ти в реално време на 3D карта. Без бутони. Без разсейване.",
  },
  "hero.app.cta": { en: "Explore the App", bg: "Разгледай приложението" },

  // ── SplitHero — Right (Goggles) ──
  "hero.goggles.badge": { en: "The Ultimate Line of Sight", bg: "Перфектното поле на видимост" },
  "hero.goggles.title1": { en: "See Everything.", bg: "Виж всичко." },
  "hero.goggles.title2": { en: "Miss Nothing.", bg: "Не пропускай нищо." },
  "hero.goggles.desc": {
    en: "Holographic AR display projects speed, squad locations, and hazard alerts directly onto your lens. Hands-free. Eyes forward. Always.",
    bg: "Холографски AR дисплей проектира скорост, местоположение на екипа и предупреждения за опасност директно на лещата. Свободни ръце. Поглед напред. Винаги.",
  },
  "hero.goggles.cta": { en: "Shop Goggles", bg: "Купи очила" },
  "hero.tagline": { en: "Invisible Tech · Deep Connection", bg: "Невидима технология · Дълбока връзка" },

  // ── StatsBar ──
  "stats.ar": { en: "AR Display", bg: "AR дисплей" },
  "stats.ar_desc": { en: "Holographic refresh rate", bg: "Холографска честота" },
  "stats.weight": { en: "Ultra-Light", bg: "Ултра леки" },
  "stats.weight_desc": { en: "You won't feel it", bg: "Няма да ги усетиш" },
  "stats.sos": { en: "Crash SOS", bg: "SOS при удар" },
  "stats.sos_desc": { en: "GPS auto-alert", bg: "Автоматичен GPS сигнал" },
  "stats.fov": { en: "Field of View", bg: "Поле на видимост" },
  "stats.fov_desc": { en: "Full peripheral vision", bg: "Пълно периферно зрение" },

  // ── BrandSplit ──
  "brand.subtitle": { en: "Two Worlds. One Ecosystem.", bg: "Два свята. Една екосистема." },
  "brand.title": { en: "Choose Your Terrain", bg: "Избери своя терен" },
  "brand.desc": {
    en: "Same holographic AR core. Tuned for completely different extremes. Whether you ride powder or roost, Sentio keeps you locked in.",
    bg: "Едно и също холографско AR ядро. Настроено за напълно различни екстремни условия. Дали каращ в сняг или кал, Sentio те държи в играта.",
  },
  "brand.dirt.title": { en: "Dirt", bg: "Мото" },
  "brand.dirt.subtitle": { en: "Edition", bg: "Версия" },
  "brand.dirt.tagline": {
    en: "Dust-sealed. Vibration-dampened. Built for the gnarliest trails on earth.",
    bg: "Защитени от прах. С виброзащита. Създадени за най-трудните пътеки на земята.",
  },
  "brand.alpine.title": { en: "Alpine", bg: "Сняг" },
  "brand.alpine.subtitle": { en: "Edition", bg: "Версия" },
  "brand.alpine.tagline": {
    en: "Heated anti-fog. Thermal battery. Crystal clarity at -25°C.",
    bg: "Нагряване против замъгляване. Термична батерия. Кристална яснота при -25°C.",
  },
  "brand.explore": { en: "Explore", bg: "Разгледай" },

  // ── TechShowcase ──
  "tech.subtitle": { en: "Invisible Tech. Deep Connection.", bg: "Невидима технология. Дълбока връзка." },
  "tech.title": { en: "The Ecosystem", bg: "Екосистемата" },
  "tech.desc": {
    en: "Athletes shouldn't freeze their hands, break their flow, or stare at a screen to stay connected. Sentio is the technology that disappears into the ride.",
    bg: "Атлетите не трябва да замръзват ръцете си, да прекъсват потока си или да се взират в екран, за да са свързани. Sentio е технологията, която изчезва в каращето.",
  },
  "tech.ar.title": { en: "Holographic AR Display", bg: "Холографски AR дисплей" },
  "tech.ar.desc": {
    en: "High-contrast holographic lens projects your speed, squad locations, and hazard alerts into your line of sight. No screen glare. No focus shift. Just pure data, exactly where you need it.",
    bg: "Холографска леща с висок контраст проектира скоростта, местата на екипа и предупреждения за опасност директно на прицела. Без отблясъци. Без загуба на фокус.",
  },
  "tech.audio.title": { en: "Bone-Conduction Audio", bg: "Аудио чрез костна проводимост" },
  "tech.audio.desc": {
    en: "Hear Walkie-Talkie pings from your squad over wind and engine noise — without blocking environmental awareness. Stay connected, stay safe.",
    bg: "Чувай ping-ове от Walkie-Talkie на екипа над шума от вятъра и двигателя — без да блокираш звуците от средата. Бъди свързан, бъди в безопасност.",
  },
  "tech.squad.title": { en: "Real-Time Squad Map", bg: "Карта на екипа в реално време" },
  "tech.squad.desc": {
    en: "Premium 3D terrain adapts for snow or dirt. See every rider in your crew, live. No more lost friends on the mountain.",
    bg: "Премиум 3D терен се адаптира за сняг или кал. Виж всеки от екипа в реално време. Край на загубените приятели на планината.",
  },
  "tech.hazard.title": { en: "Waze-Style Hazard Alerts", bg: "Предупреждения за опасност а-ла Waze" },
  "tech.hazard.desc": {
    en: "Community-powered hazard warnings appear on your lens before you hit them. Ice patches, fallen trees, blind drops — your crew has your back.",
    bg: "Предупреждения за опасност от общността се появяват на лещата преди да ги срещнеш. Ледени петна, паднали дървета, скрити стръмнини — екипът те пази.",
  },

  // ── LifestyleCTA ──
  "lifestyle.badge": { en: "Built for the Crew", bg: "Създадено за екипа" },
  "lifestyle.title1": { en: "Post-Ride Bragging Rights", bg: "Право на хвалба след спускането" },
  "lifestyle.title2": { en: "Start on the Mountain.", bg: "Започва от планината." },
  "lifestyle.desc": {
    en: "Every run logged. Every top speed recorded. Every gnarly wipeout captured. When the goggles come off and the stories start, you'll have the data to back it up.",
    bg: "Всяко спускане записано. Всеки рекорд запазен. Всяко зрелищно падане уловено. Когато свалиш очилата и историите започнат — ще имаш данните да ги докажеш.",
  },
  "lifestyle.cta_dirt": { en: "Shop Dirt", bg: "Купи Мото" },
  "lifestyle.cta_alpine": { en: "Shop Alpine", bg: "Купи Сняг" },

  // ── FAQ ──
  "faq.subtitle": { en: "Got Questions?", bg: "Имаш въпроси?" },
  "faq.title": { en: "Frequently Asked", bg: "Често задавани" },
  "faq.q1": { en: "When will Sentio ship?", bg: "Кога ще бъдат доставени Sentio?" },
  "faq.a1": {
    en: "Pre-orders are expected to ship in Q4 2026. Early pre-order customers get priority in the shipping queue and will receive tracking updates as production progresses.",
    bg: "Предварителните поръчки ще бъдат доставени в Q4 2026. Ранните клиенти получават приоритет и ще бъдат информирани за напредъка на производството.",
  },
  "faq.q2": { en: "Do the goggles work without the app?", bg: "Работят ли очилата без приложението?" },
  "faq.a2": {
    en: "Yes. The AR display, bone-conduction audio, and crash detection all work standalone. The Sentio App enhances the experience with squad tracking, 3D terrain maps, session analytics, and Walkie-Talkie — but it's not required for core operation.",
    bg: "Да. AR дисплеят, аудиото чрез костна проводимост и детекцията на удар работят самостоятелно. Sentio App подобрява изживяването с проследяване на екипа, 3D карти, анализи и Walkie-Talkie — но не е задължително.",
  },
  "faq.q3": { en: "How does the crash detection work?", bg: "Как работи детекцията на удар?" },
  "faq.a3": {
    en: "The 6-axis IMU samples acceleration at 800 Hz. When it detects an impact consistent with a crash, it triggers a 30-second countdown. If not cancelled, Sentio broadcasts an SOS with your GPS coordinates to your emergency contacts and your entire riding crew via the app.",
    bg: "6-осният IMU измерва ускорението при 800 Hz. При регистриране на удар, стартира 30-секундно обратно броене. Ако не бъде отменено, Sentio излъчва SOS с GPS координати до спешните контакти и целия екип чрез приложението.",
  },
  "faq.q4": { en: "What about fog and cold weather?", bg: "Какво правят при мъгла и студ?" },
  "faq.a4": {
    en: "The Alpine Edition features a sealed dual-pane lens with an ITO heating element that clears fog in under 8 seconds. The battery is wrapped in a dual-layer aerogel thermal jacket that maintains 85%+ capacity even at -25°C.",
    bg: "Алпийската версия разполага с двойна леща с ITO нагревател, който премахва мъглата за под 8 секунди. Батерията е обвита в двуслоен аерогел, който поддържа 85%+ капацитет дори при -25°C.",
  },
  "faq.q5": { en: "Are these compatible with my helmet?", bg: "Съвместими ли са с моя шлем?" },
  "faq.a5": {
    en: "Sentio goggles are tested with 50+ popular MX, enduro, ski, and snowboard helmets. The articulating outrigger system flexes ±15° to match any helmet curvature. Brands like Bell, Shoei, Fox Racing, Smith, Giro, and many more — confirmed compatible.",
    bg: "Sentio очилата са тествани с 50+ популярни MX, ендуро, ски и сноуборд шлемове. Артикулиращата система се огъва ±15° за перфектно прилягане. Работят с Bell, Shoei, Fox Racing, Smith, Giro и много други.",
  },
  "faq.q6": { en: "Is there a warranty?", bg: "Има ли гаранция?" },
  "faq.a6": {
    en: "Every Sentio product comes with a 2-year limited warranty and a 30-day satisfaction guarantee. Not happy? Return for a full refund. No questions asked.",
    bg: "Всеки продукт на Sentio идва с 2-годишна ограничена гаранция и 30-дневна гаранция за удовлетвореност. Не си доволен? Върни за пълно възстановяване без въпроси.",
  },

  // ── Footer ──
  "footer.title": { en: "Join the Crew", bg: "Присъедини се към отбора" },
  "footer.desc": { en: "Get early access, launch updates, and exclusive drops. No spam. Just the good stuff.", bg: "Получи ранен достъп, новини за стартиране и ексклузивни оферти. Без спам." },
  "footer.subscribe": { en: "Subscribe", bg: "Абонирай се" },
  "footer.product": { en: "Product", bg: "Продукт" },
  "footer.technology": { en: "Technology", bg: "Технология" },
  "footer.company": { en: "Company", bg: "Компания" },
  "footer.legal": { en: "Legal", bg: "Правно" },
  "footer.dirt_edition": { en: "Dirt Edition", bg: "Мото версия" },
  "footer.alpine_edition": { en: "Alpine Edition", bg: "Алпийска версия" },
  "footer.sentio_app": { en: "Sentio App", bg: "Sentio приложение" },
  "footer.holographic_ar": { en: "Holographic AR", bg: "Холографско AR" },
  "footer.crash_detection": { en: "Crash Detection", bg: "Детекция на удар" },
  "footer.squad_radar": { en: "Squad Radar", bg: "Радар на екипа" },
  "footer.about_us": { en: "About Us", bg: "За нас" },
  "footer.careers": { en: "Careers", bg: "Кариери" },
  "footer.contact": { en: "Contact", bg: "Контакт" },
  "footer.privacy": { en: "Privacy Policy", bg: "Политика за поверителност" },
  "footer.terms": { en: "Terms of Service", bg: "Условия за ползване" },
  "footer.warranty": { en: "Warranty", bg: "Гаранция" },
  "footer.back_top": { en: "Back to top", bg: "Нагоре" },

  // ── Cart ──
  "cart.title": { en: "Your Cart", bg: "Количка" },
  "cart.empty": { en: "Your cart is empty", bg: "Количката е празна" },
  "cart.empty_desc": { en: "Explore our goggles and add them to your cart.", bg: "Разгледай очилата и добави в количката." },
  "cart.total": { en: "Total", bg: "Общо" },
  "cart.checkout": { en: "Complete Pre-Order", bg: "Завърши предварителна поръчка" },
  "cart.shipping": { en: "Free shipping worldwide · 30-day returns", bg: "Безплатна доставка по целия свят · 30-дневно връщане" },
  "cart.add": { en: "Add to Cart — Pre-Order", bg: "Добави — предварителна поръчка" },
  "cart.preorder_price": { en: "Pre-order price", bg: "Цена при предварителна поръчка" },

  // ── Product pages — shared ──
  "product.back": { en: "Back to Home", bg: "Обратно" },
  "product.core_cap": { en: "Core Capabilities", bg: "Основни възможности" },
  "product.on_lens": { en: "Everything on Your", bg: "Всичко на твоята" },
  "product.lens": { en: "Lens", bg: "Леща" },
  "product.env": { en: "Environment Engineering", bg: "Инженерство за средата" },
  "product.ergo": { en: "Ergonomics", bg: "Ергономия" },
  "product.helmet": { en: "Helmet Integration", bg: "Интеграция с шлема" },
  "product.comfort": { en: "& Comfort", bg: "& Комфорт" },
  "product.full_specs": { en: "Full Specifications", bg: "Пълни спецификации" },
  "product.tech_details": { en: "Technical", bg: "Технически" },
  "product.details": { en: "Details", bg: "Подробности" },
  "product.ready": { en: "Ready to Ride?", bg: "Готов ли си да караш?" },
  "product.free_shipping": { en: "Free Shipping", bg: "Безплатна доставка" },
  "product.returns": { en: "30-Day Returns", bg: "30-дневно връщане" },
  "product.warranty": { en: "2-Year Warranty", bg: "2-годишна гаранция" },

  // ── Moto-specific ──
  "moto.badge": { en: "SENTIO  |  MOTO EDITION", bg: "SENTIO  |  МОТО ВЕРСИЯ" },
  "moto.title1": { en: "The Ultimate", bg: "Перфектното" },
  "moto.title2": { en: "Line of Sight", bg: "Поле на видимост" },
  "moto.desc": {
    en: "Aero-grade carbon core. Holographic AR display. Bone-conduction audio. Speed, squad locations, and hazard alerts projected directly onto your lens — so you never break focus on the trail.",
    bg: "Аеро-клас карбонова основа. Холографски AR дисплей. Аудио чрез костна проводимост. Скорост, местоположение на екипа и предупреждения за опасност проектирани директно на лещата.",
  },
  "moto.built_for": { en: "Built for", bg: "Създадени за" },
  "moto.the_dirt": { en: "the Dirt", bg: "калта" },
  "moto.cta_name": { en: "Sentio Moto", bg: "Sentio Мото" },
  "moto.cta_edition": { en: "Motocross & Enduro Edition", bg: "Мотокрос & Ендуро версия" },

  // ── Snow-specific ──
  "snow.badge": { en: "SENTIO  |  SNOW EDITION", bg: "SENTIO  |  СНЯГ ВЕРСИЯ" },
  "snow.title1": { en: "Crystal Clarity at", bg: "Кристална яснота при" },
  "snow.desc": {
    en: "Holographic AR display. Heated anti-fog lens. Bone-conduction audio for crew pings over wind roar. Your speed, squad locations, and hazard alerts — projected on your lens so your hands never leave the poles.",
    bg: "Холографски AR дисплей. Нагряваща леща против замъгляване. Аудио чрез костна проводимост за сигнали от екипа над шума от вятъра. Скорост, местоположение и опасности — на лещата, за да не пускаш щеките.",
  },
  "snow.built_for": { en: "Built for", bg: "Създадени за" },
  "snow.the_cold": { en: "the Cold", bg: "студа" },
  "snow.cta_name": { en: "Sentio Snow", bg: "Sentio Сняг" },
  "snow.cta_edition": { en: "Ski & Snowboard Edition", bg: "Ски & Сноуборд версия" },
};

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("sentio-lang") as Lang | null;
    if (stored === "bg") setLangState("bg");
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("sentio-lang", newLang);
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry.en || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
