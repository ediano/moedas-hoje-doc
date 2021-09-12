import styled, { css } from 'styled-components'
import { FcOvertime } from 'react-icons/fc'
import { row, container, grid } from 'styles/layout'

export const Container = styled.section`
  ${row}

  ${({ theme }) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
  `}
`

export const Wrapper = styled.div`
  ${container}

  display: flex;
  align-items: center;

  ${({ theme }) => css`
    padding: ${theme.spacing.xl} 0;
    margin-top: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.lg};
  `}

  ${grid.lessThan('lg')(css`
    flex-direction: column;
  `)}
`

export const Content = styled.div`
  width: 60%;

  ${({ theme }) => css`
    h1,
    p {
      padding: 0 ${theme.spacing.sm};
      margin-bottom: ${theme.spacing.lg};
    }

    h1 {
      font-size: ${theme.fonts.sizes.lg};
    }

    p {
      text-align: justify;
      font-size: ${theme.fonts.sizes.sm};
    }
  `}

  ${grid.lessThan('lg')(css`
    width: 100%;
    max-width: 700px;
  `)}
`

export const Overtime = styled.div`
  width: 100%;
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;

  ${grid.lessThan('lg')(css`
    display: none;
  `)}
`

export const IcoOvertime = styled(FcOvertime)`
  width: 150px;
  height: 150px;

  ${({ theme }) => css`
    fill: ${theme.colors.sWhite};
  `}
`
