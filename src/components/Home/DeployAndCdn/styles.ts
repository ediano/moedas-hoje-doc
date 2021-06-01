import styled, { css } from 'styled-components'
import { container, grid } from '@/styles/layout'

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
  `}
`

export const Wrapper = styled.div`
  ${container}

  ${({ theme }) => css`
    padding: ${theme.spacing.lg};
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  ${({ theme }) => css`
    p {
      width: 70%;
      font-size: ${theme.fonts.sizes.md};
    }

    ${grid.lessThan(
      'lg',
      css`
        p {
          width: 100%;
        }
        flex-direction: column;
      `
    )}
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
  width: 30%;

  display: flex;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => css`
    padding: ${theme.spacing.lg};

    ${grid.lessThan(
      'lg',
      css`
        width: 100%;
      `
    )}

    & > svg {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      max-width: 64px;
      height: 64px;
      max-height: 64px;
      fill: #fff;
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
  `}

  a,
  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    max-width: 64px;
    height: 64px;
    max-height: 64px;
    color: #fff;
  }
`
