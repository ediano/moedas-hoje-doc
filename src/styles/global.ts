import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 65%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fonts.sizes.xs};
    font-weight: 300;
  }

  body,
  input,
  textarea,
  button,
  code {
    font-family: ${props => props.theme.fonts.family};
  }
`
