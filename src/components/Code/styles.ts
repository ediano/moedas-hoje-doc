import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;

  ${({ theme }) => css`
    margin: ${theme.spacing.md} 0;
  `}
`

export const Lang = styled.span`
  position: absolute;
  top: -15px;
  left: 8.5px;

  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacing.xxs};
    border-radius: ${theme.spacing.xxs};
  `}
`

export const CodeNone = styled.code`
  ${({ theme }) => css`
    padding: ${theme.spacing.xxs} !important;
  `}
`
