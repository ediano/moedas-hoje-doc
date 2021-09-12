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
  return (...styles: FlattenSimpleInterpolation) =>
    css`
      @media (max-width: ${sizes[size] || `${size}px`}) {
        ${styles}
      }
    `
}

function greaterThan(firstSize: Sizes, lastSize: Sizes) {
  return (...styles: FlattenSimpleInterpolation) =>
    css`
      @media (min-width: ${sizes[firstSize] ||
        `${firstSize}px`}) and (max-width: ${sizes[lastSize] ||
        `${lastSize}px`}) {
        ${styles}
      }
    `
}

function between(size: Sizes) {
  return (...styles: FlattenSimpleInterpolation) =>
    css`
      @media (min-width: ${sizes[size] || `${size}px`}) {
        ${styles}
      }
    `
}

export const grid = {
  lessThan,
  greaterThan,
  between
}
