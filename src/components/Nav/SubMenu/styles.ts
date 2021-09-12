import styled, { css } from 'styled-components'
import { grid } from 'styles/layout'

export const Container = styled.div`
  ${({ theme }) =>
    grid.lessThan('lg')(css`
      border-top: 1px solid ${theme.colors.sIce};
    `)}

  ${({ theme }) =>
    grid.between('lg')(css`
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 200px;
      box-shadow: ${theme.shadow};
    `)}
`

export const ListWrapper = styled.ul``

export const ListItem = styled.li`
  display: block;
`

export const Anchor = styled.a`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    color: ${theme.colors.secondary};

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`
