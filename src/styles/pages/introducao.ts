import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.md};
  `}
`
