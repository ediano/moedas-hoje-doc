import styled, { css } from 'styled-components'
import { grid } from '@/styles/layout'

export const Container = styled.div`
  ${({ theme }) =>
    grid.lessThan('lg')(css`
      border-top: 1px solid ${theme.colors.sIce};
      padding-top: ${theme.spacing.sm};
      padding: ${theme.spacing.sm} ${theme.spacing.md};
    `)}

  ${({ theme }) =>
    grid.between('lg')(css`
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 250px;
      box-shadow: ${theme.shadow};
    `)}
`
