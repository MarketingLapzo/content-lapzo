# Case Study Templates — Lapzo

A4 portrait (595×842pt) print-ready templates para casos de éxito. Reconstruidos directamente del `CASOS DE ÉXITO.fig` oficial.

## Estructura canónica (6 páginas)

| Página | Contenido | Layout key |
|---|---|---|
| 1 | **Portada** — logo + "Caso de éxito [Cliente]" + intro | Dot pattern, título dominante |
| 2 | **Sobre el cliente** | Header con pagination · texto + foto |
| 3 | **El reto** | Texto largo + foto vertical |
| 4 | **La solución propuesta** | Bullets numerados + quote box |
| 5 | **Resultados** | Big numbers + cards |
| 6 | **Productos usados** | Cards de módulos lapzo |

## Header consistente (páginas 2-6)

```
[logo lapzo]   |   Caso de exito   [0X]
```

## Archivos

- `caso-mazda.html` — caso completo de Mazda, 6 páginas (referencia visual)
- `template-generico.html` — versión vacía para llenar con cualquier cliente nuevo

## Cómo adaptar para un cliente nuevo

1. Copia `template-generico.html` y renómbralo (ej. `caso-rotoplas.html`).
2. Reemplaza los placeholders `{{CLIENTE}}`, `{{INDUSTRIA}}`, etc.
3. Sube la foto del equipo del cliente a `assets/photos/` y ajusta la ruta.
4. Ajusta el número de bullets y resultados según el caso.
5. Imprime: abre en navegador → Cmd/Ctrl+P → "Save as PDF" → ya está.

## Tipografía

Headlines de caso de éxito usan **Degular Bold** (fuente display oficial de Lapzo según material en producción). Mientras el TTF de Degular no esté en `fonts/`, el sistema usa **Poppins 700/800** como fallback visualmente cercano.
