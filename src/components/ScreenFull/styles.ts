import styled, { css } from 'styled-components'
import { container, grid } from '@/styles/layout'

export const Container = styled.section`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    background: linear-gradient(
      135deg,
      ${theme.colors.ice} 50%,
      ${theme.colors.white} 50%
    );
  `}
`

export const Wrapper = styled.div`
  ${container}

  display: flex;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => css`
    margin-top: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.lg};
  `}

  ${grid.lessThan(
    'md',
    css`
      display: block;
    `
  )}
`

export const Title = styled.h1`
  margin-right: auto;

  ${({ theme }) => css`
    padding: ${theme.spacing.lg};
    font-size: ${theme.fonts.sizes.lg};
  `}
`

export const ContentGroup = styled.div`
  display: flex;
  align-items: center;

  ${grid.lessThan(
    'lg',
    css`
      display: block;
    `
  )}
`

export const Image = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  ${grid.lessThan(
    'lg',
    css`
      width: 100%;
    `
  )}

  ${({ theme }) => css`
    padding: ${theme.spacing.lg};

    & > div {
      border-radius: ${theme.spacing.xxs};
      box-shadow: 0 2px 12px 0 ${theme.colors.background};
    }
  `}
`

export const Content = styled.div`
  width: 75%;

  ${({ theme }) => css`
    padding: ${theme.spacing.lg};

    p {
      font-size: ${theme.fonts.sizes.md};
      margin-bottom: ${theme.spacing.sm};

      strong {
        color: ${theme.colors.primary};
        border-bottom: 1px solid ${theme.colors.primary};
      }
    }

    ${grid.lessThan(
      'lg',
      css`
        width: 100%;

        p {
          font-size: ${theme.fonts.sizes.sm};
        }
      `
    )}
  `}
`
