import { ReactNode } from 'react'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

import { site } from 'config/site'
import Header from 'components/Header'
import Footer from 'components/Footer'

import * as S from './styles'

type Props = {
  title: string
  children?: ReactNode
}

export const Pages = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>
          {title} | {site.title} | {site.name}
        </title>
      </Head>

      <GlobalStyle layout="pages" />

      <Header />

      <S.Main>
        <S.Wrapper>{children}</S.Wrapper>
      </S.Main>

      <Footer />
    </>
  )
}
