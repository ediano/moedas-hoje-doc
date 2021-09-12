import styled, { css } from 'styled-components'
import { container } from 'styles/layout'

export const Wrapper = styled.section`
  ${container}

  ${({ theme }) => css`
    padding: ${theme.spacing.xl} 0;
  `}
`
