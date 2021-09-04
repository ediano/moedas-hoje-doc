import styled, { css } from 'styled-components'

type ContainerProps = {
  isLabel?: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;

  ${({ theme, isLabel }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacing.sm};
    margin: ${theme.spacing.sm} 0;
    border-radius: ${theme.border.sm};

    ${isLabel &&
    css`
      border: 1px solid ${theme.colors.shadow};
    `}
  `}
`

type LabelProps = {
  isFocus?: boolean
}

export const Label = styled.label<LabelProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s;

  ${({ theme, isFocus }) => css`
    background: ${theme.colors.white};

    ${isFocus &&
    css`
      top: 0;
    `}
  `}
`

export const Input = styled.input`
  width: 100%;
  height: 32px;

  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xs};
  `}
`
