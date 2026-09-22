# Brochures Templates — Lapzo

Templates A4 portrait (595×842pt) reconstruidos del `Brochures lapzo.fig` oficial.

## Tipos de pieza

### 1. Plan brochures (`plan-*.html`)
One-pager por plan comercial. **Mitad superior lavanda con título + iconos de módulos + clientes + mockup**, **mitad inferior dark con 6 beneficios en grid 2×3**.

- `plan-lapzo.html` — Plan completo (todos los módulos)
- `plan-desarrolla-y-capacita.html` — CyA + DxC
- `plan-desarrolla-y-evalua.html` — DxC + EVA
- `template-plan-generico.html` — vacío para llenar

### 2. One-pager por producto (`producto-*.html`)
One-pager por módulo individual. **Mitad superior con color del módulo (peach para CyA, lila para DxC, pink para EVA, etc) + pill del módulo + título + mockup grande**, **mitad inferior gris claro con 6 beneficios en grid 3×2 con micro-mockups**.

- `producto-capacitacion.html` — Módulo CyA (naranja)
- `producto-desarrollo-competencias.html` — Módulo DxC (violet)
- `template-producto-generico.html` — vacío

### 3. Catálogo de cursos (`catalogo-cursos.html`)
Brochure de venta del catálogo de +800 cursos. Estética peach con tarjetas de academia en stack a la derecha + 6 beneficios + footer con app móvil, rutas y certificación DC3.

## Convenciones

- **Tamaño:** A4 portrait 595×842pt — escalable a 1.4× para preview en pantalla
- **Print-ready:** `@page { size: A4 portrait; margin: 0 }` — Cmd+P → Save as PDF
- **Tipografía:** Degular Bold para H1, Poppins para body (manual oficial)
- **Logos de clientes:** sección "Eligen este plan:" muestra 3-4 logos `assets/client-logos/`

## Cómo personalizar para un cliente nuevo

1. Copia `template-plan-generico.html` (o el producto) y renombra
2. Cambia los datos del header (módulos incluidos = colored, no incluidos = gray)
3. Cambia los 3-4 logos de clientes
4. Cambia el copy de los 6 beneficios
5. Print → PDF
