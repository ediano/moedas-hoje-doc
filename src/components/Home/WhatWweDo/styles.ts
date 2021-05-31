import styled, { css } from 'styled-components'
import { shade } from 'polished'
import { RiBankFill } from 'react-icons/ri'

import { container, grid } from '@/styles/layout'

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
  `}
`

export const Wrapper = styled.div`
  ${container}

  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  ${({ theme }) => css`
    padding: ${theme.spacing.xl} 0;
    color: ${theme.colors.white};
  `}

  ${grid.lessThan(
    'lg',
    css`
      flex-direction: column;
    `
  )}
`

export const Content = styled.div`
  width: 75%;

  ${({ theme }) => css`
    p {
      text-align: justify;
      font-size: ${theme.fonts.sizes.sm};
      margin: ${theme.spacing.sm};
    }
  `}

  ${grid.lessThan(
    'lg',
    css`
      width: 100%;
      max-width: 700px;
    `
  )}
`

export const BankFill = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;

  ${grid.lessThan(
    'lg',
    css`
      display: none;
    `
  )}
`

export const IcoBankFill = styled(RiBankFill)`
  width: 100%;
  height: 100%;
`

export const ListExchange = styled.div`
  text-align: center;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing.sm};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: inline-table;
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    padding: ${theme.spacing.sm};
    margin: ${theme.spacing.xs};
    font-size: ${theme.fonts.sizes.sm};
    border-radius: ${theme.spacing.xxs};
    transition: 0.4s;
    box-shadow: ${theme.shadow};

    &:hover {
      box-shadow: 0 4px 12px 0 ${shade(0.5, theme.colors.shadow1)};
    }
  `}
`
