# 👋 Bienvenido al Design System de Lapzo

**Este proyecto es la fuente oficial de verdad de la marca Lapzo en Claude Design.**

Si lo abriste por primera vez — léete esta guía antes que nada. Te toma 3 minutos y te ahorra horas.

---

## ¿Qué es esto exactamente?

Un **design system completo** para generar cualquier pieza de Lapzo (slides, landings, mockups, banners, emails, ads, etc.) con consistencia de marca — sin tener que pensar en colores, tipografía, voz o assets cada vez.

Incluye:
- 📘 Manual de marca completo (16 secciones, buyer personas, AI Rules)
- 🎨 Todos los tokens visuales (colores, tipografía, sombras, espaciados)
- 🖼️ 150+ assets oficiales (logo, Lapzi, iconos, decorativos, ilustraciones)
- 🧩 2 UI kits funcionales (producto LMS + sitio web)
- 🎞️ Template de 8 slides 16:9

---

## Primera vez aquí — qué hacer

### Paso 1 — Explora la pestaña "Design System"

Arriba del chat verás una pestaña **"Design System"** (o "Sistema de diseño"). Ábrela. Vas a ver tarjetas agrupadas por:

- **Colors** — paletas (violetas, teales, secundarios, gradientes)
- **Type** — fuentes, escala de títulos, reglas tipográficas
- **Spacing** — radios, sombras, escala de espaciado
- **Components** — botones, cards, badges, forms, UI kits
- **Brand** — logo, decorativos, módulos, Lapzi, iconos, voz

Esto es para que te familiarices visualmente con lo que tienes disponible.

### Paso 2 — Lee (o pídele a Claude que te resuma) estos 3 archivos

| Archivo | Qué tiene | Cuándo abrirlo |
|---|---|---|
| `brand-manual.md` | Manual completo con personas, voz, AI Rules, casos por sector | **Antes de cualquier propuesta de copy o estrategia** |
| `README.md` | Mapa del proyecto + foundations visuales rápidas | Como referencia continua |
| `SKILL.md` | Instrucciones para que Claude se comporte como diseñador de Lapzo | No lo edites — solo está ahí para guiar al modelo |

> 💡 Truco: en tu primer mensaje del chat, escribe *"Resúmeme `brand-manual.md` en 2 párrafos y dime cuáles son las 5 reglas más importantes de marca"*. En 30 segundos tienes el contexto.

### Paso 3 — Pídele tu primera pieza

No tienes que dar instrucciones técnicas. Lapzo Design System se activa solo. Algunos ejemplos para arrancar:

```
"Diseña un pitch deck de 10 slides para vender Lapzo a un director
de RH de manufactura. Usa caso de Rotoplas."
```

```
"Hazme 3 banners de LinkedIn para celebrar +63 mil cursos terminados
en Mazda. Formato 1200×628."
```

```
"Diseña la pantalla de Lapzo.IA cuando un usuario sube un PDF
para crear un curso."
```

```
"Necesito un email de bienvenida para nuevos clientes — tono cálido,
firma de Andrea de Customer Success."
```

```
"Crea una landing page de una sola sección para el módulo de OKRs."
```

Claude leerá el sistema, aplicará la marca, copiará los assets correctos y te dará el archivo HTML listo.

---

## Reglas no-negociables (las más importantes)

Estas las aplica el sistema automáticamente, pero conviene que las conozcas para revisar lo que se genera:

1. **Lapzo es "aliado estratégico"** — nunca "plataforma" ni "software"
2. **"Colaboradores"**, nunca "empleados"
3. **Títulos en minúscula** (primera letra mayúscula)
4. **Botones siempre pill** (border-radius 9999px), violeta `#8B55FE`
5. **Space Grotesk solo para H1**, todo lo demás Poppins
6. **Sin emoji** en producto ni marketing (la `✦` cerca de Lapzo.IA es la única excepción)
7. **Fondo oscuro es `#14142A`** — nunca negro puro
8. **Texto sobre claro es `#3F3F46`** — nunca `#000000`
9. **Sin texto justificado**, sin ALL CAPS en titulares
10. **Lapzi** = mascota, **Lapzo.IA** o **LIA** = copiloto de IA. No mezclar.

---

## Estructura del proyecto

```
.
├── brand-manual.md          ← manual de marca completo (LEER PRIMERO para copy)
├── README.md                ← mapa rápido del proyecto
├── BIENVENIDA.md            ← este archivo
├── SKILL.md                 ← instrucciones para Claude
├── colors_and_type.css      ← tokens (se importa en cualquier HTML)
│
├── assets/                  ← TODOS los visuales oficiales
│   ├── logo/                ← logo + 4 variantes (claro, oscuro, blanco, sobre violeta)
│   ├── lapzi/               ← mascota en 35 estados emocionales
│   ├── icons/               ← 40+ iconos outline
│   ├── modules/             ← iconos de los 6 módulos del producto
│   ├── decor/               ← elementos hechos a mano (flechas, círculos, swooshes)
│   ├── illus/               ← ilustraciones y escenas
│   └── ui-shots/            ← screenshots reales del producto
│
├── preview/                 ← 23 cards de muestra (se ven en la pestaña Design System)
├── ui_kits/
│   ├── product/             ← UI del LMS (sidebar, dashboard, OKRs, IA panel)
│   └── marketing/           ← UI del sitio web (hero, módulos, casos, footer)
└── slides/                  ← template de 8 slides 16:9
```

---

## Cuándo NO usar este sistema

- Si necesitas algo que NO sea Lapzo — abre otro proyecto.
- Si vas a inventar visuales fuera del manual — primero valida con el equipo de marca.
- Si encuentras un caso que el manual no cubre — anótalo y avísale al equipo para actualizar `brand-manual.md`.

---

## Mantenimiento

- **Cuando se actualice el manual de marca**: reemplaza `brand-manual.md` con la versión nueva.
- **Cuando lleguen assets nuevos**: arrástralos a la carpeta correspondiente de `assets/`.
- **Cuando se agreguen reglas nuevas**: edita la sección apropiada en `brand-manual.md`.
- Las preview cards (`preview/`) se regeneran solas — no necesitas tocarlas a mano.

---

## ¿Dudas?

- 🎨 Sobre diseño visual → pregúntale directo a Claude en este proyecto
- 📘 Sobre la marca → consulta `brand-manual.md` o al equipo de marketing
- 🛠️ Sobre cómo agregar/modificar el sistema → pídele a Claude *"agrega esto al design system y registra el card correspondiente"*

---

*Compilado por Diego Cuauhtémoc, Growth Marketing Manager · Manual de marca v2.0 · Rebranding 2025–2026*
