import { css, FlattenSimpleInterpolation } from 'styled-components'

const sizes = {
  xs: '250px',
  sm: '450px',
  md: '768px',
  lg: '1170px',
  xlg: '1440px'
}

type Sizes = keyof typeof sizes | number

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

function lessThan(size: Sizes) {
  const isNumber = typeof size === 'number'
  return (...styles: FlattenSimpleInterpolation) =>
    css`
      @media (max-width: ${isNumber ? `${size}px` : sizes[size]}) {
        ${styles}
      }
    `
}

function greaterThan(firstSize: Sizes, lastSize: Sizes) {
  const isNumberFirstSize = typeof firstSize === 'number'
  const isNumberLastSize = typeof lastSize === 'number'
  return (...styles: FlattenSimpleInterpolation) =>
    css`
      @media (min-width: ${isNumberFirstSize
          ? `${firstSize}px`
          : sizes[firstSize]}) and (max-width: ${isNumberLastSize
          ? `${lastSize}px`
          : sizes[lastSize]}) {
        ${styles}
      }
    `
}

function between(size: Sizes) {
  const isNumber = typeof size === 'number'
  return (...styles: FlattenSimpleInterpolation) =>
    css`
      @media (min-width: ${isNumber ? `${size}px` : sizes[size]}) {
        ${styles}
      }
    `
}

export const grid = {
  lessThan,
  greaterThan,
  between
}
