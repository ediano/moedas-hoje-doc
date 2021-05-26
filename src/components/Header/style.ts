import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xs};
  `};
`
