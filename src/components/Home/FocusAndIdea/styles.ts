import styled, { css } from 'styled-components'
import { shade } from 'polished'
import { FcIdea } from 'react-icons/fc'
import { row, container, grid } from '@/styles/layout'

export const Container = styled.section`
  ${row}

  ${({ theme }) => css`
    background: ${theme.colors.primary};
  `}
`

export const Wrapper = styled.div`
  ${container}

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  ${({ theme }) => css`
    padding: ${theme.spacing.xl} 0;
    margin-top: ${theme.spacing.xxl};
    margin-bottom: ${theme.spacing.xxl};
    color: ${theme.colors.white};
  `}

  ${grid.lessThan('lg')(css`
    flex-direction: column-reverse;
  `)}
`

export const Content = styled.div`
  width: 75%;

  ${({ theme }) => css`
    p {
      text-align: right;
      font-size: ${theme.fonts.sizes.sm};
      margin: ${theme.spacing.sm};
    }
  `}

  ${grid.lessThan('lg')(css`
    width: 100%;
    max-width: 700px;

    p {
      text-align: justify;
    }
  `)}
`

export const Idea = styled.div`
  width: 100%;
  max-width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
`

export const IcoFcIdea = styled(FcIdea)`
  min-width: 150px;
  min-height: 150px;

  ${({ theme }) =>
    grid.lessThan('lg')(css`
      margin-bottom: ${theme.spacing.sm};
    `)}
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
