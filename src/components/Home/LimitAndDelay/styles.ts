import styled, { css } from 'styled-components'
import { GiTimeTrap } from 'react-icons/gi'
import { container, grid } from '@/styles/layout'

export const Container = styled.section``

export const Wrapper = styled.div`
  ${container}

  display: flex;
  align-items: center;

  ${({ theme }) => css`
    padding: ${theme.spacing.xl} 0;
  `}

  ${grid.lessThan(
    'lg',
    css`
      flex-direction: column;
    `
  )}
`

export const Content = styled.div`
  width: 60%;

  ${({ theme }) => css`
    h1,
    p {
      padding: 0 ${theme.spacing.lg};
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

  ${grid.lessThan(
    'lg',
    css`
      width: 100%;
      max-width: 700px;
    `
  )}
`

export const TimeTrap = styled.div`
  width: 100%;
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;

  ${grid.lessThan(
    'lg',
    css`
      display: none;
    `
  )}
`

export const IcoTimeTrap = styled(GiTimeTrap)`
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    fill: ${theme.colors.lBlack};
  `}
`
