import styled, { css } from 'styled-components'
import { container } from 'styles/layout'

export const Wrapper = styled.section`
  ${container}

  ${({ theme }) => css`
    padding: ${theme.spacing.xl} 0;
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: ${theme.spacing.xxl};
      margin-bottom: ${theme.spacing.xs};
    }

    h2 {
      font-size: ${theme.spacing.md};
    }

    h3 {
      font-size: ${theme.spacing.sm};
    }

    h4,
    h5,
    h6 {
      font-size: ${theme.spacing.xs};
    }

    p > code {
      background: ${theme.colors.black};
      color: ${theme.colors.white};
      font-weight: 600;
      padding: ${theme.spacing.xxs};
      border-radius: ${theme.border.xs};
    }

    blockquote {
      border-left: ${theme.spacing.xxs} solid ${theme.colors.primary};
      padding: ${theme.spacing.sm};
      margin-top: ${theme.spacing.sm};
      margin-bottom: ${theme.spacing.sm};
    }
  `}
`
