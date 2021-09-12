import { createGlobalStyle, css } from 'styled-components'
import { grid } from './layout'

type Props = {
  layout?: 'home' | 'pages'
}

export default createGlobalStyle<Props>`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 65%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background: ${props => props.theme.colors.ice};
    color: ${props => props.theme.colors.secondary};
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

  ul,
  ol {
    list-style: none;
  }

  p + p {
     ${({ theme }) => css`
       margin-top: ${theme.spacing.md};
     `};
  }

  ${({ layout }) =>
    layout === 'pages' &&
    css`
      header,
      main,
      footer {
        padding-left: 200px;
      }

      ${grid.lessThan('lg')(css`
        header,
        main,
        footer {
          padding-left: 0;
        }
      `)}
    `}

  pre {
    ${({ theme }) => css`
      margin: ${theme.spacing.md} 0 !important;
    `}
  }
`
