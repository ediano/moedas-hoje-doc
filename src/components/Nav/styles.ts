import styled, { css } from 'styled-components'
import { shade, transparentize } from 'polished'
import { container, grid } from '@/styles/layout'

export const Nav = styled.nav`
  width: 100%;
  height: 128px;
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.sIce};
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

    svg {
      font-size: ${theme.fonts.sizes.xl};
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

export const ListWrapper = styled.div`
  display: flex;
  margin-left: auto;

  ${({ theme }) => css`
    .sidenav-overlay {
      position: fixed;
      display: none;
      top: 127px;
      left: 0;
      z-index: 998;
      height: 100%;
      background: ${transparentize(0.5, theme.colors.secondary)};
      transform: translateX(-150%);
    }

    .active ~ .sidenav-overlay {
      width: 100%;
      display: block;
      transform: translateX(0%);
    }
  `}
`

export const ListContainer = styled.ul`
  display: flex;
  height: 100%;

  ${({ theme }) =>
    grid.lessThan('lg')(css`
      background: ${theme.colors.ice};
      display: block;
      position: absolute;
      z-index: 999;
      top: 127px;
      left: 0;
      height: 100vh;
      width: 250px;
      transform: translateX(-150%);
      box-shadow: 0 12px 12px 0 ${shade(0.2, theme.colors.ice)};
      overflow-y: auto;
      transition: 0.2s;

      &.active {
        position: fixed;
        transform: translateX(0%);
      }
    `)}
`

export const List = styled.li`
  display: flex;

  ${grid.lessThan('lg')(css`
    display: block;
  `)}
`

export const ListLink = styled.a`
  display: flex;
  align-items: center;
  transition: 0.4s;
  font-weight: 600;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing.sm};
    color: ${theme.colors.sText};

    &:hover {
      color: ${shade(0.1, theme.colors.primary)};
    }

    ${grid.lessThan('lg')(css`
      display: block;
      padding: ${theme.spacing.sm} ${theme.spacing.md};
    `)}
  `}
`

export const Button = styled.button`
  display: none;
  background: transparent;
  cursor: pointer;

  ${({ theme }) => css`
    svg {
      width: 32px;
      height: 32px;
      fill: ${theme.colors.sText};
    }

    padding: 0 ${theme.spacing.sm};

    &:hover {
      background: ${shade(0.1, theme.colors.ice)};
    }
  `}

  ${grid.lessThan('lg')(css`
    display: block;
  `)}
`
