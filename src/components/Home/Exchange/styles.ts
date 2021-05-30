import styled, { css } from 'styled-components'
import { shade } from 'polished'

import { container } from '@/styles/layout'

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
  `}
`

export const Wrapper = styled.section`
  ${container}

  ${({ theme }) => css`
    padding: ${theme.spacing.xl} 0;
    color: ${theme.colors.white};
  `}

    p {
    text-align: center;
    display: block;
  }
`

export const Content = styled.div`
  display: flex;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing.sm} ${theme.spacing.xl};

    p {
      text-align: justify;
      font-size: ${theme.fonts.sizes.sm};
      margin: ${theme.spacing.sm};
    }
  `}
`

export const ListExchange = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: center;
  justify-content: center;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing.sm};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    padding: ${theme.spacing.sm};
    margin: ${theme.spacing.sm};
    border-radius: ${theme.spacing.xxs};
    transition: 0.4s;
    box-shadow: ${theme.shadow};

    &:hover {
      box-shadow: 0 4px 12px 0 ${shade(0.5, theme.colors.shadow1)};
    }
  `}
`
