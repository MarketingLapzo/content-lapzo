---
name: lapzo-design
description: Use this skill to generate well-branded interfaces and assets for Lapzo, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Lapzo Design Skill

**ANTES de cualquier propuesta de copy o estrategia**, lee `brand-manual.md` (manual completo v2.0 con buyer personas, AI Behavior Rules, casos por sector y manejo de objeciones).

Para contexto rápido visual + índice del proyecto, lee `README.md`.

Para tokens (colores, tipografía, sombras, radios, espaciados):
- **Prototipos / HTML** → importa `colors_and_type.css`.
- **Código de producción (React/Tailwind/JS)** → usa `tokens.json` (machine-readable) o el preset `tailwind.config.js`. Mantenerlos en sync con el CSS.
- **Gráficas (People Analytics)** → paleta categórica en `--chart-1…8` (CSS) o `chart` en `tokens.json`. Nunca improvisar colores de chart.

## Where to find things

| You need… | Look in… |
|---|---|
| Logo + isotipo (white / dark variants) | `assets/logo/` |
| 6 module icons (CyA, DxC, EVA, S&E, TaaS, CAT) | `assets/modules/` |
| 40+ outline icons for UI | `assets/icons/` |
| Hand-drawn brand decor (arrows, swooshes, stars, flowers) | `assets/decor/` |
| Lapzi mascot (~25 emotional states, PNG) | `assets/lapzi/` |
| Cohete & scene illustrations | `assets/illus/` |
| Real product screenshots (3 pieces) | `assets/ui-shots/` |
| Working product UI (LMS dashboard) | `ui_kits/product/` |
| Working marketing landing | `ui_kits/marketing/` |
| Ad templates (Meta/LinkedIn · 1:1, 4:5, 9:16) | `ui_kits/marketing/ad-templates.html` |
| Reusable components + gallery | `ui_kits/components/` (`index.html` = visual gallery; see README) |
| Tokens for production code | `tokens.json` · `tailwind.config.js` |
| Chart / data-viz palette | `--chart-*` in `colors_and_type.css` · `chart` in `tokens.json` |
| Client→module mapping (real data) | from Vitaly export; baked into `ui_kits/components/clientes-por-modulo.html` |

## Non-negotiable rules (load these into working memory)

1. **Lapzo is "aliado estratégico", never "plataforma" or "software"** as positioning.
2. **"Colaboradores"**, never "empleados".
3. **Titles in lowercase** (first letter capitalized only).
4. **Never `#000000`** — text on light bg is `#3F3F46`. Dark bg is `#14142A`.
5. **Buttons are pill** (radius 9999px), violet `#8B55FE`, Poppins SemiBold.
6. **Photos always have border-radius ≥ 12px**.
7. **Space Grotesk for H1 only.** Poppins for everything else.
8. **No emoji** in product UI or marketing copy. The `✦` sparkle is allowed only near Lapzo.IA contexts.
9. **Secondary colors max 20%** of any piece. Never as the dominant background.
10. **No justified text. No ALL CAPS in headings** (except RH, OKR, IA, TaaS, DC3).

## When the user invokes this skill

If the user invokes the skill without other guidance:

1. Ask what they want to build (slide, ad, landing page, app screen, doc).
2. Ask the audience (which buyer persona — Pedro / Andrea / Sofía / Santiago / Valentina / Juan — see README persona section).
3. Ask the pillar (Innovadora / Confiable / Experta en talento) to guide tone.
4. Then act as an expert designer:
   - For prototypes/mocks/slides → output static HTML with `colors_and_type.css` imported and assets copied from `assets/`.
   - For production code → produce React/HTML components, reference the tokens by name, point them at the assets in this folder.

## Voice prompt skeleton

When writing copy, use this internal checklist:

- Title in lowercase, ≤ 10 words, no `!`
- Italic only for emphasis inside body copy
- Verb-first CTAs ("Agenda demo", "Conoce más" — never "Click aquí")
- Case-study copy: `[verb] + [data] + [client] + [result]` — client in violet accent
- "Lapzo.IA" or "LIA" for the AI copilot. "Lapzi" for the mascot. Never mix them.

## Common assets to copy when prototyping

For a typical landing page: `assets/logo/lapzo-logo.png` (or `-on-dark.png` / `-on-violet.png` / `-white.png` for variants), 3–4 from `assets/modules/`, 1–2 from `assets/decor/`, 1 Lapzi PNG, the 3 `assets/ui-shots/*.png`.

For a typical app screen: `assets/logo/lapzo-isotipo.png` or `lapzo-isotipo-white.png` (sidebar), 6–10 from `assets/icons/`, 1 Lapzi PNG for empty-states or success.
