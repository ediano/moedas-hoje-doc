import { ReactNode } from 'react'
import Link from 'next/link'
import { RiCoinsLine } from 'react-icons/ri'

import { site } from '@/config/site'

import * as S from './styles'

type Props = {
  children?: ReactNode
}

const HeaderHome = ({ children }: Props) => {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>
          <Link href={site.url} passHref>
            <S.LogoLink>
              <RiCoinsLine /> {site.name}
            </S.LogoLink>
          </Link>
        </S.Logo>
      </S.Wrapper>

      {children}
    </S.Header>
  )
}

export default HeaderHome
