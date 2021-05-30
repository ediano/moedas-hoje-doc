import { ReactNode } from 'react'

import Nav from '@/components/Nav'

import * as S from './style'

type Props = {
  children: ReactNode
}

export const Header = ({ children }: Props) => {
  return (
    <S.Header>
      <Nav />

      {children}
    </S.Header>
  )
}
