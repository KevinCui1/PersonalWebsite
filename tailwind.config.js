/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Times New Roman', 'Times', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'bg-base':        'var(--bg-base)',
        'bg-surface':     'var(--bg-surface)',
        'bg-border':      'var(--bg-border)',
        'accent':         'var(--accent)',
        'accent-hover':   'var(--accent-hover)',
        'text-primary':   'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted':     'var(--text-muted)',
      },
    },
  },
  plugins: [],
}
