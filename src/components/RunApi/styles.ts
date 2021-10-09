import styled, { css } from 'styled-components'
import { grid } from 'styles/layout'

export const Container = styled.form`
  ${({ theme }) => css`
    margin: ${theme.spacing.lg} auto;
  `}
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Method = styled.span`
  display: inline-block;

  ${({ theme }) => css`
    margin-right: ${theme.spacing.xs};
    padding: calc(0.5% + ${theme.spacing.xs});
    background: ${theme.colors.primary};
    border-radius: ${theme.border.xs};
    color: ${theme.colors.white};
  `}
`

export const TextUrl = styled.div`
  width: 100%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => css`
    padding: ${theme.spacing.xxs};
    background: ${theme.colors.secondary};
    border-radius: ${theme.border.xs};
  `}
`

export const Query = styled.span`
  display: inline-block;

  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
  `}
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${grid.lessThan('md')(css`
    display: block;

    & > button {
      width: 100%;
    }
  `)}

  ${({ theme }) => css`
    gap: ${theme.spacing.md};
    margin-top: ${theme.spacing.md};
  `}
`
