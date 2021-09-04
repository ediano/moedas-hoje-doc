import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MdMenu } from 'react-icons/md'
import { RiCoinsLine } from 'react-icons/ri'

import SubMenu from './SubMenu'

import { site } from '@/config/site'
import { listLinks } from './listLinks'

import * as S from './styles'

const Nav = () => {
  const [slideOut, setSlideOut] = useState(false)

  useEffect(() => {
    addEventListener(
      'resize',
      () => slideOut && window.innerWidth > 768 && setSlideOut(false)
    )
  }, [slideOut])

  return (
    <S.Nav>
      <S.Wrapper>
        <S.Logo>
          <Link href={site.url} passHref>
            <S.LogoLink>
              <RiCoinsLine /> Doc
            </S.LogoLink>
          </Link>
        </S.Logo>
        <S.ListWrapper>
          <S.Button type="button" onClick={() => setSlideOut(!slideOut)}>
            <MdMenu />
          </S.Button>

          <S.ListContainer className={slideOut && 'active'}>
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

            <SubMenu />
          </S.ListContainer>

          <button
            type="button"
            className="sidenav-overlay"
            onClick={() => setSlideOut(!slideOut)}
          ></button>
        </S.ListWrapper>
      </S.Wrapper>
    </S.Nav>
  )
}

export default Nav
