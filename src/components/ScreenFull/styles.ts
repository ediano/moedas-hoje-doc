import styled, { css } from 'styled-components'
import { container, grid } from '@/styles/layout'
import { FaDollarSign, FaBitcoin, FaEthereum } from 'react-icons/fa'
import ButtonBase from '@/components/Button'

export const Container = styled.section`
  min-height: 500px;
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    background: linear-gradient(
      135deg,
      ${theme.colors.ice} 50%,
      ${theme.colors.white} 50%
    );
  `}
`

export const Wrapper = styled.div`
  ${container}

  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  ${({ theme }) => css`
    margin-top: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.lg};
  `}

  ${grid.lessThan(
    'lg',
    css`
      display: block;
      flex-direction: column;
    `
  )}
`

export const Image = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  ${grid.lessThan(
    'lg',
    css`
      max-width: 700px;
    `
  )}

  ${({ theme }) => css`
    padding: ${theme.spacing.lg};

    & > div {
      border-radius: ${theme.spacing.xxs};
      box-shadow: 0 2px 12px 0 ${theme.colors.secondary};
    }
  `}
`

export const Coins = styled.section`
  display: flex;
  position: absolute;
  right: 40px;
  bottom: 40px;
  background: transparent;
`

export const Dollar = styled(FaDollarSign)`
  position: absolute;
  right: 90px;
  bottom: 35px;
  width: 64px;
  height: 64px;
  fill: #fff;
  background: #388e3c;
  transform: rotate(-45deg);
  border-radius: 50%;
`

export const Bitcoin = styled(FaBitcoin)`
  position: absolute;
  right: 20px;
  bottom: 90px;
  width: 64px;
  height: 64px;
  fill: #f5b42e;
  transform: rotate(-45deg);
  border-radius: 50%;
`

export const Ethereum = styled(FaEthereum)`
  position: absolute;
  right: 5px;
  bottom: 10px;
  width: 64px;
  height: 64px;
  background: #293337;
  fill: #fff;
  transform: rotate(-45deg);
  border-radius: 50%;
`

export const Content = styled.div`
  width: 75%;

  ${({ theme }) => css`
    padding: ${theme.spacing.lg};

    h1 {
      margin-bottom: ${theme.spacing.sm};
      font-size: ${theme.fonts.sizes.lg};
    }

    p {
      margin-bottom: ${theme.spacing.sm};
      font-size: ${theme.fonts.sizes.md};

      strong {
        color: ${theme.colors.primary};
        border-bottom: 1px solid ${theme.colors.primary};
      }
    }

    ${grid.lessThan(
      'lg',
      css`
        margin: 0 auto;
        width: 100%;
        max-width: 700px;
        padding: ${theme.spacing.lg};

        p {
          font-size: ${theme.fonts.sizes.sm};
        }
      `
    )}

    ${grid.lessThan(
      'md',
      css`
        h1 {
          font-size: ${theme.fonts.sizes.md};
        }
      `
    )}
  `}
`

export const Button = styled(ButtonBase)`
  font-weight: 700;
  transition: 0.4s;

  ${({ theme }) => css`
    background: ${theme.colors.sPrimary};

    &:hover {
      box-shadow: 0 0 12px 0 ${theme.colors.lBlack};
    }
  `}
`
