# Product UI Kit — Lapzo LMS

Recreación del producto principal de Lapzo: un LMS + People Analytics con sidebar oscuro, dashboards de equipo, gestión de cursos y OKRs, y panel de Lapzo.IA.

## Pantallas incluidas

- **Mi equipo** — tabla de colaboradores con progreso, estatus y acciones (vista principal de Pedro / Andrea).
- **Capacitación** — grid de cursos, rutas y catálogo.
- **OKRs** — creación de objetivos con asistencia de Lapzo.IA.
- **Lapzo.IA chat** — copiloto de IA en panel lateral.

## Cómo está construido

`index.html` carga React + Babel desde CDN. Los componentes están dentro del propio HTML para mantener el kit autocontenido. El sistema de tokens viene de `../../colors_and_type.css`.

## Pixel-perfectness

Reconstruido **desde los screenshots de producto** que vinieron en `assets/ui-shots/`:
- `progress-card.png` — donut + breakdown de progreso por estado
- `okr-card.png` — creación de OKRs con badges OBJ/RES y CTA "Inteligencia artificial"
- `team-table.png` — tabla "Mi equipo" con filtros, slider de progreso, menú contextual

> Sin acceso a Figma ni codebase, los componentes son **aproximaciones de alta fidelidad**, no copias exactas. Para producción real, pedir el repo.

## Fuentes referenciadas del manual

- Sidebar oscuro fondo `#14142A` con texto blanco y acento violeta.
- Top bar claro con search + módulo activo + avatar.
- Badges de estado: éxito (verde `#01DA8C`), en progreso (amarillo `#F2C94C`), atrasado (rosa `#F3538E`), sin comenzar (gris `#94A3B8`).
- Botones primarios pill violeta `#8B55FE`.
- Tarjetas con sombra suave + radio 12–16px.
