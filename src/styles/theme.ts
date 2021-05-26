const theme = {
  colors: {
    background: '#121214',
    text: '#e1e1e6',
    primary: '#27a9e1'
  },
  spacing: {
    xxs: '0.4rem',
    xs: '0.8rem',
    sm: '1.6rem',
    md: '2.2rem',
    lg: '3.2rem',
    xl: '4rem',
    xxl: '5rem',
    to: (to: number) => `${to}rem`
  },
  border: {
    xxs: '0.2rem',
    xs: '0.4rem',
    sm: '0.8rem',
    md: '1.6rem',
    lg: '2.6rem',
    xl: '3.2rem',
    xxl: '5rem',
    to: (to: number) => `${to}rem`
  },
  fonts: {
    sizes: {
      xxs: '1rem',
      xs: '1.6rem',
      sm: '1.8rem',
      md: '2.6rem',
      lg: '3.4rem',
      xl: '4.2rem',
      xxl: '5rem',
      to: (to: number) => `${to}rem`
    }
  }
}

export default theme
