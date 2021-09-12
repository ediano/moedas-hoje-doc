import styled, { css } from 'styled-components'
import { row, container } from 'styles/layout'

export const Header = styled.header`
  ${row}
`

export const Wrapper = styled.section`
  ${container}

  margin: 25px auto;
`

export const Logo = styled.h1`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing.sm};

    svg {
      font-size: ${theme.fonts.sizes.xxl};
    }
  `}
`

export const LogoLink = styled.a`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
