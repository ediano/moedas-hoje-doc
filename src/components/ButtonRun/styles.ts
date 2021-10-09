import styled, { css } from 'styled-components'
import { Button as ButtonBase } from 'components/Button/styles'

export const Button = styled(ButtonBase)`
  height: 64px;

  ${({ theme }) => css`
    margin: ${theme.spacing.md} 0 ${theme.spacing.md};
  `}
`
