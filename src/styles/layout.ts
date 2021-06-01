import { css, FlattenSimpleInterpolation } from 'styled-components'

const sizes = {
  xs: '250px',
  sm: '450px',
  md: '768px',
  lg: '1170px',
  xlg: '1440px'
}

type Sizes = keyof typeof sizes

export const row = css`
  display: flow-root;

  &:after {
    content: '';
    display: table;
    clear: both;
  }
`

export const container = css`
  width: 90%;
  max-width: 1200px;
  margin: auto;
`

export const grid = {
  lessThan: (size: Sizes, styles: FlattenSimpleInterpolation) => {
    return css`
      @media (max-width: ${sizes[size] || size}) {
        ${styles}
      }
    `
  },

  greaterThan: (
    firstSize: Sizes,
    lastSize: Sizes,
    styles: FlattenSimpleInterpolation
  ) => {
    return css`
      @media (min-width: ${sizes[firstSize] ||
        firstSize}) and (max-width: ${sizes[lastSize] || lastSize}) {
        ${styles}
      }
    `
  },

  between: (size: Sizes, styles: FlattenSimpleInterpolation) => {
    return css`
      @media (min-width: ${sizes[size] || size},) {
        ${styles}
      }
    `
  }
}
