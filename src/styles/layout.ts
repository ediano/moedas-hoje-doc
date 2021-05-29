import { css, FlattenSimpleInterpolation } from 'styled-components'

const keys = {
  xs: '250px',
  sm: '450px',
  md: '768px',
  lg: '1170px',
  xlg: '1440px'
}

type Keys = keyof typeof keys

export const container = css`
  width: 90%;
  max-width: 1200px;
  margin: auto;
`

export const grid = {
  lessThan: (size: Keys, styles: FlattenSimpleInterpolation) => {
    return css`
      @media (max-width: ${keys[size] || size}) {
        ${styles}
      }
    `
  },

  greaterThan: (
    firstSize: Keys,
    lastSize: Keys,
    styles: FlattenSimpleInterpolation
  ) => {
    return css`
      @media (min-width: ${keys[firstSize] ||
        firstSize}) and (max-width: ${keys[lastSize] || lastSize}) {
        ${styles}
      }
    `
  },

  between: (size: Keys, styles: FlattenSimpleInterpolation) => {
    return css`
      @media (min-width: ${keys[size] || size},) {
        ${styles}
      }
    `
  }
}
