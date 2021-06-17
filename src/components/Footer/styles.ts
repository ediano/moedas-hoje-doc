import styled, { css } from 'styled-components'
import { row, container, grid } from '@/styles/layout'
import { RiCoinsLine } from 'react-icons/ri'

export const Container = styled.section`
  ${row}
`

export const Wrapper = styled.div`
  ${container}

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    margin-top: ${theme.spacing.xxl};
    margin-bottom: ${theme.spacing.xxl};
  `}

  ${grid.lessThan(
    'lg',
    css`
      flex-direction: column;
    `
  )}
`

export const Content = styled.section`
  position: relative;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing.sm};

    ${grid.lessThan(
      'lg',
      css`
        width: 100%;
        max-width: 700px;

        & + & {
          margin-top: ${theme.spacing.md};
        }
      `
    )}
  `}
`

export const CoinsLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    height: ${theme.spacing.xxl};
    color: ${theme.colors.primary};
    font-weight: 700;
  `}
`

export const CoinsLineIcon = styled(RiCoinsLine)`
  ${({ theme }) => css`
    width: ${theme.spacing.xxl};
    height: ${theme.spacing.xxl};
    fill: ${theme.colors.primary};
  `}
`

export const SiteFooter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${({ theme }) => css`
    margin-top: ${theme.spacing.md};

    a + a {
      margin-top: ${theme.spacing.md};
    }

    a {
      color: ${theme.colors.primary};
    }
  `}
`
