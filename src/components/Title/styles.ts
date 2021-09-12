import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.lg};
    margin-top: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.md};
  `}
`
