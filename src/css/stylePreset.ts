import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const Colours = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#ffe0e0',
      100: '#ffb3b3',
      200: '#ff8080',
      300: '#ff4d4d',
      400: '#ff3333',
      500: '#ff1a1a',
      600: '#e60000',
      700: '#cc0000',
      800: '#b30000',
      900: '#990000',
      950: '#660000',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f5f5f5',
          100: '#eeeeee',
          200: '#e0e0e0',
          300: '#bdbdbd',
          400: '#9e9e9e',
          500: '#757575',
          600: '#616161',
          700: '#424242',
          800: '#303030',
          900: '#1a1a1a',
          950: '#0a0a0a',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '#f5f5f5',
          100: '#eeeeee',
          200: '#e0e0e0',
          300: '#bdbdbd',
          400: '#9e9e9e',
          500: '#757575',
          600: '#616161',
          700: '#424242',
          800: '#2a2a2a',
          900: '#151515',
          950: '#050505',
        },
      },
    },
  },
  components: {
    button: {
      colorScheme: {
        light: {
          root: {
            primary: {
              background: '#ff1a1a',
              hoverBackground: '#ff3333',
              activeBackground: '#cc0000',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
              borderColor: '#ff1a1a',
              hoverBorderColor: '#ff3333',
              activeBorderColor: '#cc0000',
              focusRing: {
                color: 'rgba(255, 26, 26, 0.4)',
              },
            },
            danger: {
              background: '#990000',
              hoverBackground: '#cc0000',
              activeBackground: '#660000',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
              borderColor: '#990000',
              hoverBorderColor: '#cc0000',
              activeBorderColor: '#660000',
            },
          },
        },
        dark: {
          root: {
            primary: {
              background: '#ff1a1a',
              hoverBackground: '#ff3333',
              activeBackground: '#cc0000',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
              borderColor: '#ff1a1a',
              hoverBorderColor: '#ff3333',
              activeBorderColor: '#cc0000',
              focusRing: {
                color: 'rgba(255, 26, 26, 0.4)',
              },
            },
            danger: {
              background: '#990000',
              hoverBackground: '#cc0000',
              activeBackground: '#660000',
              color: '#ffffff',
              hoverColor: '#ffffff',
              activeColor: '#ffffff',
              borderColor: '#990000',
              hoverBorderColor: '#cc0000',
              activeBorderColor: '#660000',
            },
          },
        },
      },
    },
  },
});
