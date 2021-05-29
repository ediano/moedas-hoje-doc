import styled, { css } from 'styled-components'
import { shade, lighten } from 'polished'

import { container } from '@/styles/layout'

export const Container = styled.nav`
  width: 100%;
  height: 64px;
`

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 999;

  ${({ theme }) => css`
    box-shadow: ${theme.shadow};
    background: ${lighten(0.01, theme.colors.background)};
  `};
`

export const Wrapper = styled.div`
  ${container}

  display: flex;
  height: 64px;
`

export const Logo = styled.h1`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing.sm};
  `}
`

export const LogoLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const ListWrapper = styled.div`
  margin-left: auto;
`

export const ListContainer = styled.ul`
  display: flex;
  height: 100%;
`

export const List = styled.li`
  display: flex;
`

export const ListLink = styled.a`
  display: flex;
  align-items: center;
  transition: 0.4s;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing.sm};
    color: ${theme.colors.text};

    &:hover {
      background: ${shade(0.5, theme.colors.background)};
    }
  `}
`
