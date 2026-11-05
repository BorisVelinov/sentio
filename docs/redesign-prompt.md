# Sentio website redesign prompt

**Role.** You are a senior product designer and creative front-end engineer. Redesign the Sentio website from the ground up in this repo. You have a browser: use it to study great work, and to look at this site constantly while you build it.

**The product.** Sentio makes smart HUD goggles with a transparent OLED display, a built-in camera and crash detection. There are two editions, Moto ($349) and Snow ($379), plus a free companion app. The tagline is "Vision Meets Instinct."

**The goal.** Within five seconds a visitor should think: this is a real, expensive, beautifully made product from a serious company. An hour later they should still remember the site. Take Apple's confidence: huge type, one idea per screen, generous space, the product as hero, and storytelling led by scrolling. Do not make an Apple clone. It must be unmistakably Sentio, good enough to submit to Awwwards.

**What is wrong today.** Everything is the same black page of rounded cards with glows, gradient text and icon tiles. Paragraphs are long, small and grey. `/moto` and `/snow` are near copies of each other, with faded-icon placeholder boxes where images should be. The snow effect is 25 dots. Accent colours are scattered (purple, green, rose). The app buttons use emoji. Styling is mostly inline `style={{}}` objects.

**The concept: two terrains, one lens.**
- The lens is the site's central device: it is a window, and the world seen through it changes.
- Snow and dirt are materials, not decoration. Snow is cold, quiet, precise and bright. Dirt is warm, loud, kinetic and grainy. The site should feel the difference.
- Signature moment: the homepage hero is a single goggle with the world split behind it. Moving the pointer, dragging on touch, or scrolling shifts the boundary between snow and dirt. Build this first. It is the proof of the whole concept.
- Snow toolkit: a layered particle field with real depth (near flakes large and out of focus, far flakes small and sharp), wind that responds to scroll speed and pointer, powder bursts, and frost creeping in from the lens edge and then clearing to tell the anti-fog story.
- Dirt toolkit: roost spray of fine grains thrown on scroll, low drifting dust haze, and mud spatter across the lens that a tear-off peels away to tell the tear-off story.
- Use a powder blast or a dust cloud as the wipe between major sections.
- HUD language: the 128×64 OLED is a design asset. Use thin monospaced readouts (speed, altitude, temperature) as a recurring typographic motif, and include a convincing live HUD simulation.
- Restraint rule: every effect must either explain a product feature or mark a transition. Use one moving material per screen, and never put text over busy motion. If it starts to look like a Christmas card or a video game menu, pull it back.

**Design system.** Define tokens in `src/app/globals.css` under `@theme`, and use Tailwind classes rather than inline style objects.
- Colour: a neutral base of graphite and paper-white, alternating dark and light sections rather than all black. Ice blue belongs to Snow and burnt amber to Dirt, used sparingly. Retire purple, green and rose.
- Type: choose a distinctive display face through `next/font`, paired with a mono for data. Inter alone is not enough. Use very large headlines, one idea per line, and no more than two sentences of body text at a time. Move the deep technical copy into expandable details or the spec sheet.
- Motion: one easing family, scroll-linked where it adds meaning, nothing bouncy. No gradient text, no glow halos, no icon-in-a-rounded-square tiles.

**Scope.** Keep the routes and the `/#technology` anchor.
- `/`: hero, lens story, technology (HUD, camera, crash detection, exploded hardware), choose your terrain, reviews, FAQ.
- `/moto` and `/snow`: one shared, data-driven product template, each with its own material and personality. Keep the buy panel, capabilities, environment engineering, helmet fit, full spec sheet and final call to action.
- `/app`: the phone, the HUD editor (make it interactive), video overlays, download.
- Redesign the navbar and footer. Delete the unused `SnowSection`, `MotoSection` and `AppSyncSection` components and any dead CSS.

**Content rules.**
- Keep every spec, price and warranty detail exactly. Never invent numbers. You may rewrite and shorten marketing copy.
- IP54 means dust-protected, not fully dust-tight, so word it that way. Remove unprovable claims such as "no other goggle on the market".
- Rewrite the three homepage reviews so the site reads as a finished product. Make them short (one or two sentences), specific in feel and natural in voice. Use fictional riders only, with names that do not match known athletes. Do not name real teams or sponsors. Do not include measured performance claims (such as lap time gains) or stories of the SOS feature saving someone.
- Pre-order and newsletter controls stay non-functional. Do not add payments or real order capture.

**Assets.**
- Your first task is to convert the four HEIC photos in `public/images/photos_of_goggles/`. Browsers cannot show HEIC, and the `sharp` installed here cannot decode it, so use `heic-convert` or similar. Output optimised WebP/JPEG to `public/images/goggles/`, respect orientation, and strip all metadata because phone photos can contain GPS location. Move the original HEIC files out of `public/` so they are never deployed.
- Look at all four photos before designing anything. Prefer the real product over renders. Grade, crop and mask them as needed. Judge them honestly: if a phone photo is not hero quality, use it as a craft or detail shot instead.
- `hero-goggles.png` shows "AURA" on the strap and `snow-goggles.png` shows "HUD TECH". No wrong brand name may be visible anywhere: crop, retouch or replace.
- Redraw the logo (currently a white PNG named `Screenshot_2026-03-14_...`) as a clean SVG, and regenerate the favicon from it.
- Generate textures procedurally (canvas, shaders, SVG noise). Any outside image must be licensed for free use and recorded in `public/images/CREDITS.md`. Never copy assets, layouts or code from reference sites.

**Technical constraints.** Stay on Next 15 App Router, React 19, TypeScript, Tailwind 4, framer-motion and lucide-react. You may add Lenis, GSAP ScrollTrigger, or three.js if the concept truly needs them. Prefer one shared, lazy-loaded canvas layer for particles.
- Performance: smooth scrolling, LCP under 2.5 s on mobile, no layout shift. Cap device pixel ratio, reduce particles on phones, and pause anything off screen.
- Accessibility: WCAG AA contrast, full keyboard use, visible focus, real alt text. `prefers-reduced-motion` gets a beautiful static version, not a broken one.
- Git: work on a new `redesign` branch. Do not push or merge to `main`, because commits to `main` appear to go live automatically.

**Process. Follow this order.**
1. Research. Browse Awwwards (Sites of the Day, product and e-commerce categories), The FWA and CSS Design Awards, plus premium product pages such as Apple's iPhone and Vision Pro pages, Teenage Engineering, Nothing, Rivian, Polestar and Arc'teryx. Choose 6–8 sites and record in `docs/redesign-research.md` what each does well and the technique you will borrow.
2. Audit. Screenshot the current site at desktop and phone width.
3. Direction. Write a one-page design direction: palette, type, motion principles, and the plan for each page.
4. Prove it. Build the homepage hero and show it before moving on.
5. Build the rest section by section. After every section, open it in the browser at 1440×900 and 390×844, scroll through it, critique it honestly against the checklist below, and fix what you find. Never judge a section from the code alone.
6. Final pass. Review the whole site twice from top to bottom as a first-time visitor, on every route, then run `npm run build`.

**Done means all of these are true.**
- The hero makes someone stop scrolling, and the snow/dirt split works with mouse, touch and scroll.
- Taking the logo off, it could not be mistaken for a template or an Apple copy.
- Every screen has one clear idea and nothing looks like a placeholder.
- Moto and Snow feel like different worlds that share one system.
- It looks great on a phone, not just acceptable.
- No wrong brand names, broken links in the main navigation, console errors or horizontal scroll.
- `npm run build` passes.

