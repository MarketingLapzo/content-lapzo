# Lapzo Design System

**Manual de marca + UI kit para diseñar interfaces y materiales de Lapzo.**
Versión 2.0 — basado en el rebranding 2025–2026.

---

## ¿Qué es Lapzo?

Lapzo es el **aliado estratégico** de las organizaciones latinoamericanas en el **desarrollo de talento**. No es una "plataforma" ni un "software de RRHH" — esa palabra está prohibida como posicionamiento principal.

> **"Transformamos talento en acción, generando impacto en el negocio."**

### Producto

- **LMS + suite de People Analytics** con IA integrada
- **Lapzo.IA / LIA**: copiloto de IA para líderes de RH
- **Lapzi**: mascota de marca (figura violeta orgánica)
- **Mercado primario**: México y LATAM
- **Tamaño de cliente**: 25 – 1,000+ colaboradores

### Módulos principales

| Abr. | Módulo | Color |
|---|---|---|
| CyA  | Capacitación y Aprendizaje | Naranja `#F9912A` |
| DxC  | Desarrollo por Competencias | Violeta `#8B55FE` |
| EVA  | Evaluaciones y Clima | Verde Lapzo `#04949D` |
| S&E  | Estrategia y Ejecución (OKRs) | Rosa `#F3538E` |
| DES  | Desempeño | Violeta `#8B55FE` |
| TaaS | Talent-as-a-Service | Violeta `#8B55FE` |
| ATS  | Reclutamiento | Azul `#2F80ED` |
| CAT  | Catálogo (+800 cursos) | Azul `#2F80ED` |

---

## Fuentes consultadas para construir este sistema

- **`brand-manual.md`** — ⭐ fuente canónica de verdad. Manual completo v2.0 con las 16 secciones, 6 buyer personas, 10 AI Behavior Rules, casos por sector, journey de decisión y manejo de objeciones. **Leer siempre antes de proponer copy o estrategia.**
- **150+ SVG / PNG** del kit visual de Figma: logo, isotipo, decorativos hechos a mano (flechas, círculos, flores, estrellas), iconos outline de plataforma y marketing, ilustraciones (cohetes, escenas, Lapzi mascota en >25 estados), módulos del producto, screenshots reales del producto
- **`Template presentación.fig`** — template oficial de slides 16:9 (15 páginas, 482 frames) usado como referencia para los layouts en `slides/`

> ✅ **Logo oficial cargado.** En `assets/logo/`:
> - `lapzo-logo.png` — default (fondo claro)
> - `lapzo-logo-on-dark.png` — sobre fondo oscuro `#14142A` (isotipo violeta + wordmark blanco)
> - `lapzo-logo-on-violet.png` — sobre fondo violeta `#8B55FE` (isotipo oscuro + wordmark blanco)
> - `lapzo-logo-white.png` — versión todo blanco
> - `lapzo-isotipo.png` / `lapzo-isotipo-white.png` — solo isotipo (cursiva b + flecha)

---

## Contenido del proyecto

```
.
├── README.md                       — este archivo
├── SKILL.md                        — instrucciones para usar el sistema como Skill
├── colors_and_type.css             — todos los tokens (colores, tipografía, sombras, radios)
│
├── assets/
│   ├── logo/                       — isotipo + wordmark (reconstruidos)
│   ├── decor/                      — elementos hechos a mano (flechas, estrellas, swooshes)
│   ├── icons/                      — iconos outline de plataforma (40+ piezas)
│   ├── modules/                    — iconos de los 6 módulos de producto
│   ├── lapzi/                      — mascota Lapzi en >25 estados emocionales
│   ├── illus/                      — ilustraciones (cohetes, escenas)
│   ├── ui-shots/                   — screenshots reales del producto
│   └── reference/                  — material de referencia tipográfica/iconográfica
│
├── preview/                        — cards para la pestaña Design System
│
├── ui_kits/
│   ├── product/                    — UI del LMS (sidebar, dashboard, cursos, OKRs)
│   └── marketing/                  — UI del sitio web (hero, casos de éxito, footer)
│
└── slides/                         — plantillas de slides 16:9 con la marca
```

---

## Contenido fundamentals

### Voz y tono

Lapzo habla **directo, cálido, cercano y orientado a impacto**. No usa lenguaje corporativo genérico ni jerga anglo. Suena a un colega senior de RH que te entiende, no a un vendor.

| ✅ Sí dice | ❌ No dice |
|---|---|
| "Aliado estratégico" | "Solución de RRHH enterprise" |
| "Desarrollo de talento" | "Gestión del talento" |
| "Colaboradores" | "Empleados / headcount" |
| "Impacto en el negocio" | "Optimización de recursos" |
| "Transformamos talento en acción" | "Software as a service" |

**Reglas duras (no negociables):**

- Títulos siempre en **minúscula** (primera letra mayúscula, el resto minúscula). Ejemplo: `"Desarrolla el talento de tu equipo"`, no `"DESARROLLA"` ni `"Desarrolla El Talento"`.
- Usar *itálica* para resaltar conceptos importantes en el copy. Nunca en títulos.
- Alineación: izquierda o centrada. **Nunca justificada**.
- Sin signos de exclamación en titulares — Lapzo es directa, no exclamativa.
- Texto en fondo claro: gris oscuro `#3F3F46`. Nunca `#000000` puro.
- Texto en fondo oscuro o violeta: blanco `#FFFFFF`.
- Escribir "Lapzo" (no "LAPZO"), "Lapzi" (mascota), "Lapzo.IA" o "LIA" (copiloto de IA).

**Tono por contexto:**

- **Onboarding**: cálido, celebratorio, empoderador. ("Bienvenido. Tu siguiente nivel profesional empieza aquí.")
- **Funcionalidades**: claro, directo, orientado al beneficio. ("Crea un curso completo desde un PDF en 5 minutos.")
- **Errores**: humano, sin culpar al usuario, con solución. ("Algo no cargó. Inténtalo otra vez.")
- **Ventas / Marketing**: retador, con dato, enfocado a ROI. ("Mazda alcanzó +63 mil cursos terminados en un año.")

**Patrón de copy de casos de éxito:** `[Verbo de acción] + [dato concreto] + [nombre del cliente] + [resultado]`. El cliente en color de acento. Sin signo de exclamación.

---

## Visual foundations

### Vibe general

Lapzo se ve **digital, cálido y un poco hecho a mano**. Hay una tensión deliberada entre:

- la **geometría limpia** de Space Grotesk + Poppins (tech, ordenado, confiable),
- y los **trazos a mano alzada** (flechas, círculos, swooshes estilo Melodrama de Figma) que humanizan.

El violeta brilla. El verde y los secundarios acentúan pero nunca dominan. Hay **mucho espacio en blanco**, fotos con **bordes redondeados**, y la mascota Lapzi aparece en momentos emocionales (logros, errores, onboarding).

### Color

- **80% primarios** (violetas + verde Lapzo + dark `#14142A`). **20% máximo** en secundarios.
- **Color de acento principal**: `#8B55FE` (botones, links, isotipo, highlights).
- **Color de fondo oscuro**: `#14142A`. Nunca negro puro.
- **Texto en fondo claro**: `#3F3F46`. Nunca `#000000`.
- **Degradado principal**: violeta oscuro → violeta UI → lila (`#5029A3 → #8B55FE → #C3B1FF`). Solo usar con violetas, nunca mezclado con secundarios.
- **Secundarios** (rosa, naranja, azul, amarillo): solo como acentos pequeños (badges, dots, iconos de módulo). Nunca como fondo dominante.

### Tipografía

- **H1 (titulares principales)** → Space Grotesk Bold, line-height `1.0`, tracking apretado (`-0.02em`).
- **H2 / H3 / H4 / body / botones** → Poppins (300, 400, 500, 600, 700).
- En el producto digital: **solo Poppins**.
- En marketing y branding: combo Space Grotesk + Poppins.
- *Itálica* en Poppins para enfatizar.
- Nunca ALL CAPS en titulares (excepto siglas: RH, OKR, IA, TaaS, DC3).

### Background / fondos

- Fondo página por default: `#F8FAFC` (gris muy claro) o `#FFFFFF`.
- Secciones alternas: `#F7F7FC` o `#F5F2FF` (lila muy suave).
- Hero / banners destacados: degradado violeta `--gradient-brand` (135°).
- Sidebar / dark mode: `#14142A`.
- Cajas IA (Lapzo.IA): degradado violeta suave con blur + etiqueta "lapzo.IA" + destellos `✦`.

### Cards y contenedores

Dos sistemas de elevación coexisten:

1. **Sombra dura** (`4px 4px 0 #14142A`) sobre fondo claro o **destacado sobre oscuro**. Bordes 12–16px. Da feel de "sticker" o nota recortada.
2. **Sombra difusa** (`0 4px 20px rgba(0,0,0,0.08)`) para UI estándar. Bordes 12–16px.

Las **cajas IA** usan `border-radius` más grande (20–24px) y degradado violeta semi-transparente.

### Radios

- Iconos: `8px`
- Cards UI / mockups / fotos: `12–16px` (nunca esquinas rectas en fotos)
- Cajas grandes / IA / cards-hero: `16–24px`
- Botones: `9999px` (pill siempre)

### Botones

- **Primario**: fondo violeta `#8B55FE`, texto blanco, Poppins SemiBold, pill (9999px), padding generoso. A veces lleva cursor decorativo (puntero `→`) representando interacción.
- **Ghost**: borde 1.5px violeta, texto violeta, fondo transparente, pill.
- **Dark**: fondo `#14142A`, texto blanco. Para CTAs sobre fondos claros muy luminosos.
- **Tamaños**: `sm` (acciones secundarias), default, `lg` (CTAs hero "Agendar Demo").

### Estados interactivos

- **Hover**: oscurecer el fill levemente, o saturar el borde. No usamos sombras grandes en hover.
- **Press / active**: `transform: scale(0.98)` ligero.
- **Focus**: outline violeta `#8B55FE` con offset 2px.
- **Disabled**: `opacity 0.5` + `cursor: not-allowed`.

### Animación

- **Easing**: suave (`ease`, `cubic-bezier(0.4, 0, 0.2, 1)`). Sin bouncing exagerado.
- **Duración**: 150ms para hover/press, 250ms para transitions de UI, 400ms para entradas grandes.
- **Lapzi** es donde sí puede haber pequeñas bouncys: idle bounce, surprise jump, celebration.
- **Sin animaciones gratuitas**. Cada anim debe enseñar algo (cambio de estado, jerarquía, focus).

### Imagery / fotografía

- **Personas reales** en contextos casuales y alegres. Nunca traje/corbata, nunca estrechando manos.
- **Bordes redondeados siempre** (`border-radius: 12px+`). Nunca esquinas rectas en fotos.
- **Si es generada por IA**: estilo lifestyle corporativo cálido (terracota suave, verde musgo, madera clara, luz lateral).
- Lapzi puede aparecer junto a screenshots para celebrar logros.

### Elementos decorativos (trazo Melodrama)

- **Flechas hechas a mano** guían la lectura. No son decoración de fondo.
- **Círculos sueltos** enfatizan palabras dentro de un título — siempre **detrás** del texto (z-index bajo).
- **Estrellas, flores, plus** (`+`) — máximo 2–3 por pieza.
- Mismos colores que la paleta (violetas, teal, naranja, rosa).
- **NO combinar** línea punteada + línea sólida con degradado en la misma pieza.

### Transparencia y blur

- Solo en **cajas IA** y en algunos overlays oscuros sobre imagen.
- `backdrop-filter: blur(20px)` con fondo `rgba(255,255,255,0.7)` sobre fotos.

### Layout rules

- Logo en la esquina de la pieza: **bottom-right o top-left**.
- Área de seguridad alrededor del logo: ancho de la letra "L" del wordmark.
- Tamaño mínimo del logo: **50px de ancho** en digital.
- Mockups del producto: siempre con esquinas redondeadas (nunca rectas), a veces con elementos "saliéndose" del marco.

---

## Iconografía

Lapzo usa **tres familias** de iconos:

### 1. Iconos de plataforma (outline)

40+ iconos outline a 24×24 con stroke ~1.5–2px. **Estilo limpio, sin relleno.** Encuéntralos en `assets/icons/` — incluye: alert, audio, file, folder, search, send, user, validation, video, etc. Estos son los del **banco interno de Lapzo**, copiados directo del kit de Figma.

### 2. Iconos de módulo (circulares, two-tone)

Cada módulo del producto tiene un icono propio: **círculo con borde saturado + relleno en pastel + icono saturado dentro**. Tamaño base 48×48. Encuéntralos en `assets/modules/`.

| Módulo | Color saturado | Color pastel |
|---|---|---|
| Capacitación (CyA) | `#F9912A` | `#FDE0C3` |
| Desarrollo (DxC) | `#5029A3` / `#8B55FE` | `#DAC8FF` / `#C5A9FF` |
| Evaluaciones (EVA) | `#04949D` / `#F3538E` | `#CCFFEC` / `#FFD3E3` |
| Estrategia (S&E) | `#01DA8C` / `#F3538E` | `#CCFFEC` / `#FFD3E3` |
| Catálogo (CAT) | `#2F80ED` | `#D6E6FB` |

### 3. Iconos de marketing (decorativos)

Trazo a mano + relleno. Para piezas de comunicación. Hay un set específico de Marketing en `assets/reference/icons-marketing.svg`.

### Emoji y unicode

- **Lapzo NO usa emoji** en interfaz de producto ni en copy de marketing.
- Los **destellos `✦` / `✧`** (caracteres Unicode) sí se usan: marcan la presencia de IA (cerca de Lapzo.IA badges, en cajas degradadas). Son la única excepción.

### Mascotas (Lapzi y Lapzi IA)

- **Lapzi** (mascota general, violeta `#8B55FE` con visor pastel verde) — `assets/lapzi/lapzi-*.png`. >25 estados emocionales. Aparece en celebración, onboarding, errores, gamificación.
- **Lapzi IA** — versión con destellos para contextos de IA. Aparece en `creación de cursos`, `chat de Lapzo.IA`, `sugerencias automáticas`.
- **No mezclar** ambas en la misma pieza salvo comparativa de features.
- **Nunca** modificar forma, colores ni proporción.

---

## Tweakable surfaces / variants

Los **violetas** son donde más variación hay (12 tonos del más oscuro al más claro). En general:

- Para **fondos**: usa pasteles (`#F5F2FF`, `#ECE8FF`) o el dark `#14142A`.
- Para **CTAs**: siempre `#8B55FE`.
- Para **acentos pequeños**: cualquier secundario (rosa, naranja, azul, amarillo) — máximo 1 secundario por pieza.

---

## Index — archivos en este sistema

| Archivo | Para qué |
|---|---|
| **`BIENVENIDA.md`** 👋 | **Empieza por aquí** si es tu primera vez en el proyecto. |
| `brand-manual.md` | ⭐ **Manual de marca completo v2.0** — leer antes de cualquier propuesta estratégica o copy. Contiene buyer personas, AI Behavior Rules, casos por sector, manejo de objeciones. |
| `colors_and_type.css` | Importar en cualquier HTML para tener todos los tokens (incluye paleta de charts `--chart-*`). |
| `tokens.json` | Tokens machine-readable para generar código de producción. |
| `tailwind.config.js` | Preset de Tailwind derivado de los tokens (proyectos React). |
| `ui_kits/components/` | Componentes reutilizables + galería visual (`index.html`). |
| `ui_kits/marketing/ad-templates.html` | Plantillas de anuncios Meta/LinkedIn (1:1, 4:5, 9:16). |
| `assets/logo/` | Logo oficial + 4 variantes (claro, sobre violeta, sobre oscuro, blanco). |
| `assets/decor/` | Elementos hechos a mano (flechas, círculos, swooshes, estrellas, flores). |
| `assets/icons/` | 40+ iconos outline del producto. |
| `assets/modules/` | Iconos de los 6 módulos. |
| `assets/lapzi/` | Mascota Lapzi en estados emocionales (PNG). |
| `assets/illus/` | Ilustraciones de cohetes y escenas. |
| `assets/ui-shots/` | Screenshots reales del producto (3 piezas). |
| `preview/` | Cards de muestra para la pestaña Design System. |
| `ui_kits/product/` | UI kit del producto (LMS). |
| `ui_kits/marketing/` | UI kit del sitio web. |
| `slides/` | Template de 8 slides 16:9. |
| `SKILL.md` | Instrucciones para usar este sistema como Claude Skill. |

---

## Caveats / pendientes

1. **Fuentes** ahora son 100% locales en `fonts/`: **Degular Display + Degular** (display real de marca, OTF/variable), **Poppins** (18 TTF) y **Space Grotesk** (variable, respaldo). No dependen de CDN.
2. **No hay codebase ni link Figma** — la UI del producto está reconstruida desde screenshots + descripciones del manual. Pixel-perfect requeriría acceso al repo o al Figma.
3. **El wordmark del logo usa una tipografía custom** (no Poppins). Por eso usamos siempre la imagen PNG cuando aparece el wordmark — no se puede "escribir lapzo" en texto y que se vea oficial.
