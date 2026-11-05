# Design direction: two terrains, one lens

## Audit of the old site

- Hero: the goggle render sits in a visible black box, shows "AURA" on the strap, and pushes the headline below the fold.
- Every page is black, with the same cards, glows and gradient text.
- `/moto` and `/snow` share one layout with colours swapped.

## The big idea

The goggle stays exactly as photographed, with only its background removed. Nothing is drawn over the lens.

Two worlds meet at a moving boundary: warm dirt on one side, cold snow on the other. The pointer or a touch drag moves it. Scrolling parts the two terrains like doors, each carrying half the headline, and leaves the goggle on graphite. The photo is never enlarged.

## Type: one font that changes with the terrain

Archivo is a variable font with a width axis, and we use that as the brand idea.

- Dirt: heavy and condensed, like a race number.
- Snow: light and expanded, like open air.
- The hero headline morphs between the two as the boundary moves.
- Data and labels use Martian Mono at small sizes, the voice of the HUD.

## Colour

| Token | Value | Use |
| --- | --- | --- |
| Graphite | `#0E0F11` | Dark sections, text on light |
| Paper | `#F2F0EB` | Light sections, the white of packed snow |
| Stone | `#8A8780` | Secondary text |
| Ice | `#9CCBE6` on dark, `#1F6E9C` on light | Snow accent only |
| Amber | `#E08A3C` on dark, `#A84E12` on light | Dirt accent only |

Each page uses one accent. The homepage uses both, but only where the two terrains meet.

## Layout below the hero

Taken from Polestar: no boxes, no rounded corners, no borders around content. Left-aligned statements, staggered real photos, full-bleed images, thin rules, square buttons.

## Motion

- One easing curve, `cubic-bezier(0.22, 1, 0.36, 1)`.
- Scroll moves only transform and opacity, so it stays on the GPU.
- No preloader. The product is visible immediately.
- Reduced motion: static split at 50%, no particles.

## Pages

- `/`: pinned split hero, terrains part to reveal the goggle, technology, choose your terrain, reviews, FAQ.
- `/moto` and `/snow`: one template from one data file. Moto uses dark, warm, condensed type. Snow uses paper-white, cold, expanded type.
- `/app`: graphite with a working HUD editor.

## Photography

- Use: the two shots with the lens swung open, which show the magnetic lens system on real granite.
- Hero: the front view as a cutout, which removes the playing cards. Lens pixels are untouched apart from retouching third-party small print.
- Avoid showing: the woven strap lettering, small print on the lens edge, the radio mast.
