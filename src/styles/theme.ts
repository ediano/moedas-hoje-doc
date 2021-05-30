import { shade, lighten } from 'polished'

const theme = {
  shadow:
    '0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%)',

  colors: {
    sText: shade(0.9, '#fff'),
    lText: lighten(0.9, '#000'),
    primary: '#27a9e1',
    sPrimary: shade(0.25, '#27a9e1'),
    lPrimary: lighten(0.25, '#27a9e1'),
    secondary: '#444',
    sSecondary: shade(0.25, '#444'),
    lSecondary: lighten(0.25, '#444'),
    white: '#fff',
    sWhite: shade(0.25, '#fff'),
    black: '#000',
    lBlack: lighten(0.25, '#000'),
    ice: '#f0f4f7',
    sIce: shade(0.25, '#f0f4f7'),
    lIce: lighten(0.25, '#f0f4f7'),
    shadow: '#00000025',
    shadow1: shade(0.25, '#00000025'),
    shadow2: shade(0.5, '#00000025')
  },
  spacing: {
    xxs: '0.4rem',
    xs: '0.8rem',
    sm: '1.6rem',
    md: '2.2rem',
    lg: '3.2rem',
    xl: '4rem',
    xxl: '5rem'
  },
  border: {
    xxs: '0.2rem',
    xs: '0.4rem',
    sm: '0.8rem',
    md: '1.6rem',
    lg: '2.6rem',
    xl: '3.2rem',
    xxl: '5rem'
  },
  fonts: {
    family: `Roboto, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    sizes: {
      xxs: '1rem',
      xs: '1.6rem',
      sm: '1.8rem',
      md: '2.6rem',
      lg: '3.4rem',
      xl: '4.2rem',
      xxl: '5rem'
    }
  }
}

export default theme
