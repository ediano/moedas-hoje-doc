import { ReactNode } from 'react'

import Nav from 'components/Nav'

import * as S from './styles'

type Props = {
  children?: ReactNode
}

const Header = ({ children }: Props) => {
  return (
    <S.Header>
      <Nav />

      {children}
    </S.Header>
  )
}

export default Header
