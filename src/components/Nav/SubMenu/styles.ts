import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;

  ${({ theme }) => css`
    box-shadow: ${theme.shadow};
  `};
`
