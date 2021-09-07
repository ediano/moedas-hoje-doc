import styled, { css } from 'styled-components'

export const Container = styled.form``

export const Content = styled.div`
  height: 32px;
  line-height: 32px;

  ${({ theme }) => css`
    margin: ${theme.spacing.md} ${theme.spacing.xxs} 0;
    background: ${theme.colors.secondary};
    border-radius: ${theme.border.xs};
    color: ${theme.colors.white};
  `}
`

export const Method = styled.span`
  ${({ theme }) => css`
    margin: ${theme.spacing.md} ${theme.spacing.xxs} 0;
    padding: ${theme.spacing.xs};
    background: ${theme.colors.primary};
    border-radius: ${theme.border.xs};
    color: ${theme.colors.white};
  `}
`

export const Query = styled.span`
  display: inline-block;

  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
  `}
`
