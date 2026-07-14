/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep Teal / Warm Coral palette (logo-based)
        primary: {
          DEFAULT: '#1A4C56', // Deep Teal — headers, navigation, brand elements
          dark: '#143941', // derived darker teal — hover states, full dark sections
        },
        accent: {
          DEFAULT: '#BA544A', // accessible deep coral — solid CTA button fills (passes AA with white text)
          dark: '#9E473F', // hover state for accent buttons
          light: '#E8695C', // true Warm Coral — decorative accents/highlights only, not for text
        },
        gold: '#C4A86C', // Muted Gold — subtle borders/decorative accents only, not for text
        background: {
          DEFAULT: '#FDF8F5', // Warm White — page background
          light: '#FAD9C9', // Soft Peach — alternating section backgrounds, light cards
        },
        border: {
          DEFAULT: '#F0EDEA', // Light Gray — dividers, subtle borders
        },
        text: {
          DEFAULT: '#3D3D3D', // Charcoal Gray — body text
          muted: '#6B6B6B',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.08)',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
