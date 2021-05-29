import { ReactNode } from 'react'

import Nav from '@/components/Nav'

import * as S from './style'

type Props = {
  isHome?: boolean
  children: ReactNode
}

export const Header = ({ isHome, children }: Props) => {
  return (
    <S.Header>
      <Nav isHome={isHome} />

      {children}
    </S.Header>
  )
}
