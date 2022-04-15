const spacingSize = 8

const getSpacing = (count = 50) => Array.from({ length: count + 1 }).map((_, index) => `${index * spacingSize}px`)

const spacing = Object.assign({}, getSpacing(25))

/**
 * @type import("tailwindcss/tailwind-config").TailwindConfig
 */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.tsx'],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#000000',
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      primary: {
        50: '#def0fc',
        100: '#bcd7e3',
        200: '#9ab9c9',
        300: '#779daf',
        400: '#5d889c',
        500: '#427389',
        DEFAULT: '#366579',
        700: '#285163',
        800: '#1b3f4e',
        900: '#092a37',
      },
      secondary: {
        50: '#e6f1ef',
        100: '#c1ddd8',
        200: '#9dc8c0',
        300: '#7fb2a7',
        400: '#6fa296',
        500: '#679186',
        DEFAULT: '#60847a',
        700: '#58746b',
        800: '#51645e',
        900: '#454646',
      },
      gray: {
        50: '#F3F9FF',
        100: '#ECF1F7',
        200: '#E2E7ED',
        300: '#D1D7DD',
        400: '#ADB3B8',
        500: '#8D9298',
        DEFAULT: '#656A70',
        700: '#52575C',
        800: '#34393D',
        900: '#14191D',
      },
      error: {
        50: '#FFE9EF',
        100: '#FFC9D5',
        200: '#F8919D',
        300: '#F26276',
        400: '#FF2D54',
        500: '#FF0038',
        DEFAULT: '#F70038',
        700: '#E50031',
        800: '#D80029',
        900: '#C9001D',
      },
      success: {
        50: '#E8F5E9',
        100: '#C8E6C9',
        200: '#A5D6A7',
        300: '#81C784',
        400: '#66BB6B',
        500: '#4CAF51',
        DEFAULT: '#43A048',
        700: '#388E3D',
        800: '#2E7D33',
        900: '#1B5E21',
      },
      warning: {
        50: '#FFFEE7',
        100: '#FDFBC2',
        200: '#FBF898',
        300: '#F9F46B',
        400: '#F6EF45',
        500: '#FFF627',
        DEFAULT: '#FFE21D',
        700: '#FFC90C',
        800: '#FFB000',
        900: '#FF8500',
      },
    },
    container: {
      center: true,
    },
    extend: {
      rotate: {
        135: '135deg',
      },
      backgroundColor: {
        inherit: 'inherit',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.700'),
              },
              code: { color: theme('colors.primary.400') },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            thead: {
              borderBottomColor: theme('colors.gray.200'),
            },
            code: {
              color: theme('colors.secondary.500'),
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
              code: { color: theme('colors.primary.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  corePlugins: {
    float: false,
  },
  plugins: [require('@tailwindcss/typography')],
}
