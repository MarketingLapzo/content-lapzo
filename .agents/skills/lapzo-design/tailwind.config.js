/**
 * Lapzo Design System — Tailwind preset
 * Deriva de tokens.json / colors_and_type.css (brand manual v2.0).
 *
 * Uso en un proyecto:
 *   // tailwind.config.js
 *   const lapzo = require('./tailwind.config.js')
 *   module.exports = { presets: [lapzo], content: [...] }
 *
 * Clases resultantes: bg-violet, text-ink, rounded-pill, shadow-hard,
 * font-display, bg-gradient-brand, text-chart-1 … etc.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        violet: {
          darkest: '#240C50', dark: '#5029A3', mid: '#5B19BE', 700: '#6E1FE2',
          brand: '#7D31F6', DEFAULT: '#8B55FE', light: '#A685FF',
          'pastel-1': '#C3B1FF', 'pastel-2': '#DDD4FF', 'pastel-3': '#ECE8FF',
          soft: '#F5F2FF', mist: '#DFD9F8', stroke: '#C5A9FF',
        },
        teal: {
          darkest: '#012D33', dark: '#0F4C52', mid: '#0C5C63', 700: '#08757D',
          DEFAULT: '#04949D', light: '#08BEC4', mint: '#21DDE0', bright: '#54F4F2',
          pastel: '#92FDF7', soft: '#C9FEFB', min: '#EFFEFC',
        },
        pink:   { DEFAULT: '#F3538E', mid: '#F9A6C4', light: '#FFD3E3' },
        orange: { DEFAULT: '#F9912A', mid: '#FBBE81', light: '#FDE0C3' },
        green:  { DEFAULT: '#01DA8C', mid: '#7BECC3', light: '#CCFFEC' },
        blue:   { DEFAULT: '#2F80ED', mid: '#7FB2F0', light: '#D6E6FB' },
        yellow: { DEFAULT: '#F2C94C', mid: '#F7DEBA', light: '#FFF3CC' },
        ink:    { DEFAULT: '#3F3F46', 2: '#71717A', 3: '#475569', 4: '#94A3B8' },
        'bg-dark':  '#14142A',
        'bg-page':  '#F8FAFC',
        'bg-soft':  '#F7F7FC',
        border:     { DEFAULT: '#E2E2E8', soft: '#EFF0F6' },
        divider:    '#D9DBE9',
        // categorical chart palette
        chart: {
          1: '#8B55FE', 2: '#04949D', 3: '#F9912A', 4: '#F3538E',
          5: '#2F80ED', 6: '#01DA8C', 7: '#F2C94C', 8: '#5029A3',
        },
      },
      fontFamily: {
        display:  ['Degular Display', 'Degular', 'Space Grotesk', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display2: ['Degular', 'Space Grotesk', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body:     ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: ['clamp(40px, 5vw, 64px)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        h2: ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h3: ['24px', { lineHeight: '1.3' }],
        h4: ['18px', { lineHeight: '1.4' }],
        eyebrow: ['13px', { letterSpacing: '0.08em' }],
        caption: ['12px', { lineHeight: '1.4' }],
      },
      borderRadius: {
        xs: '4px', sm: '8px', md: '12px', lg: '16px', xl: '20px', '2xl': '24px', pill: '9999px',
      },
      boxShadow: {
        hard: '4px 4px 0 #14142A',
        'hard-sm': '3px 3px 0 #14142A',
        soft: '0 4px 20px rgba(0,0,0,0.08)',
        pop: '0 8px 28px rgba(20,20,42,0.12)',
        glow: '0 0 24px rgba(139,85,254,0.20)',
      },
      backgroundImage: {
        'gradient-brand':      'linear-gradient(135deg, #5029A3 0%, #8B55FE 60%, #C3B1FF 100%)',
        'gradient-brand-soft': 'linear-gradient(135deg, #8B55FE 0%, #C3B1FF 60%, #ECE8FF 100%)',
        'gradient-ia':         'linear-gradient(135deg, #A685FF 0%, #DDD4FF 100%)',
        'gradient-teal':       'linear-gradient(135deg, #04949D 0%, #21DDE0 70%, #92FDF7 100%)',
        'gradient-warm':       'linear-gradient(135deg, #F9912A 0%, #FBBE81 60%, #FDE0C3 100%)',
        'gradient-pink':       'linear-gradient(135deg, #F3538E 0%, #F9A6C4 60%, #FFD3E3 100%)',
      },
    },
  },
};
