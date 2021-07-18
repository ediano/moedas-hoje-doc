import styled, { css } from 'styled-components'
import { row, container, grid } from '@/styles/layout'

export const Container = styled.section`
  ${row}
`

export const Wrapper = styled.div`
  ${container}

  ${({ theme }) => css`
    padding: ${theme.spacing.lg};
    margin-top: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.lg};
  `}
`

export const Description = styled.div`
  margin: 0 auto;

  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.sm};
    font-weight: 600;
  `}

  ${grid.lessThan('lg')`
    width: 100%;
    max-width: 700px;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  ${({ theme }) => css`
    margin-top: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.lg};

    div {
      width: 70%;
      p + p {
        margin-top: ${theme.spacing.lg};
      }
    }

    ${grid.lessThan('lg')`
      div {
        width: 100%;
        max-width: 700px;
      }

      flex-direction: column-reverse;
    `}
  `}
`

export const Title = styled.h1`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.lg};
    padding: ${theme.spacing.lg} 0;
  `}
`

export const ListContent = styled.div`
  width: 100%;
  max-width: 30%;

  display: flex;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => css`
    padding: ${theme.spacing.lg};

    ${grid.lessThan('lg')`
      width: 100%;
    `}

    & > svg {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      max-width: 64px;
      height: 64px;
      max-height: 64px;
      fill: ${theme.colors.secondary};
      margin: ${theme.spacing.sm};
    }
  `}
`

export const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    a {
      font-size: ${theme.fonts.sizes.md};
      margin: ${theme.spacing.sm};
    }

    a,
    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      max-width: 64px;
      height: 64px;
      max-height: 64px;
      color: ${theme.colors.secondary};
    }
  `}
`
