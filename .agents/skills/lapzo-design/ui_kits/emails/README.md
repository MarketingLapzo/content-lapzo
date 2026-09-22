# Email Templates — Lapzo

Templates de email transaccional / marketing reconstruidos del `Emails Casos de éxito.fig` oficial.

## Anatomía canónica del email

```
┌─────────────────────────────────┐
│        [logo lapzo]             │  ← centrado top
├─────────────────────────────────┤
│  ░░░░░░░░░░░░░░░░░░░░  [foto]  │  ← hero violeta
│  Título con [pill highlight]    │     • H1 Degular/Poppins Bold
│  Sub texto.                     │     • pill dark con accent word
│  [Conoce el Caso →]             │     • CTA blanco pill
│                                 │     • foto círculo + name tag verde
├─────────────────────────────────┤
│ Nombre, hoy queremos…           │  ← body blanco
│ ■ Bullet 1                      │     • bullets cuadrados ■
│ ■ Bullet 2                      │     • centro: violet pill CTA
│     [Ver Caso de éxito]         │
├─────────────────────────────────┤
│ ████ [foto] "Quote…" ░░░░░░░░  │  ← testimonial violeta
│      Nombre                     │     • cita en itálica
│      Rol                        │     • ghost CTA con pointer
│                  [Conoce lapzo→]│
├─────────────────────────────────┤
│ [pill módulo] [foto + screenshot]│  ← product card
│ Título producto                  │     • H2 Degular Bold
│ Body                             │     • CTA "Agendar demo"
│ [Agendar demo]                   │
├─────────────────────────────────┤
│  ¡Síguenos en redes sociales!   │  ← footer lavanda
│   [fb] [in] [ig]                │
│  Lapzo, Torre Vertice, …        │
│  Darme de baja · Preferencias   │
└─────────────────────────────────┘
```

## Archivos

- `email-execon.html` — caso completo (referencia visual)
- `email-mazda.html` — variante con stat banner (cuando reintegre el archivo)
- `email-template.html` — genérico para llenar con cualquier cliente

## Ancho estándar

670px (email-safe). Encima de 600px funciona en todos los principales clientes de correo.

## ⚠️ Conversión a email-safe HTML

Estos templates están en HTML moderno (flex/grid). Antes de enviarlos por un ESP (Mailchimp, HubSpot, Marketo) **convierte a tablas HTML + inline styles** o usa MJML. Las versiones aquí son para preview y manejo de copy/diseño.
