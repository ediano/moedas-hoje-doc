import styled, { css } from 'styled-components'
import { shade } from 'polished'

import { container } from '@/styles/layout'

type Props = {
  isHome?: boolean
}

type NavProps = Props

export const Header = styled.header`
  display: block;
  width: 100%;
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
`

export const Nav = styled.nav<NavProps>`
  position: fixed;
  width: 100%;
  height: 64px;

  ${({ theme, isHome }) => css`
    box-shadow: ${theme.shadow};
    background: ${isHome
      ? theme.colors.background
      : theme.colors.backgroundSecondary};
  `};
`

export const Wrapper = styled.div`
  ${container}

  display: flex;
  align-items: center;
  height: 100%;
`

export const Logo = styled.h1`
  display: flex;
  height: 100%;
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
  height: 100%;
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

  ${({ theme }) => css`
    padding: 0 ${theme.spacing.sm};
    color: ${theme.colors.text};

    &:hover {
      background: ${shade(0.5, theme.colors.background)};
    }
  `}
`
