import Link from 'next/link'

import { site } from '@/config/site'
import { listLinks } from './listLinks'

import * as S from './styles'

type Props = {
  isHome?: boolean
}

const Nav = ({ isHome }: Props) => {
  return (
    <S.Container>
      <S.Nav>
        <S.Wrapper>
          <S.Logo>
            <Link href={site.url} passHref>
              <S.LogoLink>{site.acronyms}</S.LogoLink>
            </Link>
          </S.Logo>

          <S.ListWrapper>
            <S.ListContainer>
              {listLinks?.map(item => (
                <S.List key={item.attributes.href}>
                  {item.attributes?.target ? (
                    <S.ListLink {...item.attributes}>{item.title}</S.ListLink>
                  ) : (
                    <Link href={item.attributes.href} passHref>
                      <S.ListLink>{item.title}</S.ListLink>
                    </Link>
                  )}
                </S.List>
              ))}
            </S.ListContainer>
          </S.ListWrapper>
        </S.Wrapper>
      </S.Nav>
    </S.Container>
  )
}

export default Nav
