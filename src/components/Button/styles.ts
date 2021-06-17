import styled, { css } from 'styled-components'
import { shade } from 'polished'

type Props = {
  as?: 'button' | 'a'
  color?: string
  background?: string
}

export const Button = styled.button<Props>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;

  ${({ theme, background, color }) => css`
    padding: ${theme.spacing.sm};
    border-radius: ${theme.spacing.xxs};
    color: ${color || theme.colors.white};
    background: ${background || theme.colors.primary};
    box-shadow: 0 2px 12px 0 ${background || theme.colors.primary};

    &:hover {
      background: ${background
        ? shade(0.25, background)
        : shade(0.25, theme.colors.primary)};
      box-shadow: 0 2px 12px 0
        ${background
          ? shade(0.25, background)
          : shade(0.25, theme.colors.primary)};
    }
  `}
`
