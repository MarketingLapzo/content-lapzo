# Componentes reutilizables — Lapzo Design System

Piezas de UI sueltas (no páginas completas) listas para copiar/pegar en marketing, producto o slides. Todas importan `../../colors_and_type.css` y usan assets de `../../assets/`.

| Archivo | Qué es | Variantes |
|---|---|---|
| `clientes-por-modulo.html` | Cuadros de clientes agrupados por módulo de producto (social proof). | A · sombra suave (UI/producto) · B · sombra dura tipo sticker (marketing) |

---

## clientes-por-modulo.html

Card por módulo con su icono two-tone, color de marca, logos de clientes y contador.

**Cómo actualizar los datos (cuando llegue el export de Vitaly):**

1. Abre el archivo y baja al `<script>`.
2. Edita el arreglo `MODULOS`. Cada módulo es:

   ```js
   {
     abr: "CyA",                       // sigla del módulo
     nombre: "Capacitación y aprendizaje",
     icon: "ti-book-2",                // icono Tabler (https://tabler.io/icons)
     color: "#F9912A",                 // color saturado del módulo
     pastel: "#FDE0C3",                // color pastel del módulo
     clientes: ["mazda", "rotoplas"]   // = nombre del SVG en assets/client-logos/ (sin .svg)
   }
   ```

3. Para agregar un cliente nuevo, deja su logo en `assets/client-logos/<slug>.svg` y añade `<slug>` a la lista.

**Colores por módulo (desde el brand manual / README):**

| Módulo | `color` | `pastel` |
|---|---|---|
| Capacitación (CyA) | `#F9912A` | `#FDE0C3` |
| Desarrollo (DxC) | `#5029A3` | `#DDD4FF` |
| Evaluaciones (EVA) | `#04949D` | `#CCFFEC` |
| Estrategia (S&E) | `#F3538E` | `#FFD3E3` |
| Catálogo (CAT) | `#2F80ED` | `#D6E6FB` |

**Reglas de marca aplicadas:** títulos en minúscula, sin `#000`, color de módulo solo como acento (regla del 20%), logos en escala de grises que se colorean al hover (estilo "muro de clientes"), radios y sombras desde los tokens.

> ✅ Datos reales del export de Vitaly (jun 2026): adopción por módulo sobre 238 cuentas activas
> (CyA 197 · DxC 140 · EVA 111 · OKR 73 · Catálogo ~15 · Reclutamiento 0). Faltan logos de varios
> clientes — al sumarlos a `assets/client-logos/`, añadir el slug a la lista del módulo.
