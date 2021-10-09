import styled, { css } from 'styled-components'

type ContainerProps = {
  isLabel?: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  ${({ theme, isLabel }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacing.sm};
    margin: ${theme.spacing.sm} 0;
    border-radius: ${theme.border.sm};

    ${isLabel &&
    css`
      border: 1px solid ${theme.colors.shadow};
    `}
  `};
`

export const Select = styled.select`
  width: 100%;
  height: 32px;

  ${({ theme }) => css`
    background: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.xs};
  `}
`
