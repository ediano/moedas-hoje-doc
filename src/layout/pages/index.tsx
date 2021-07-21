import { ReactNode } from 'react'
import Head from 'next/head'

import GlobalStyle from '@/styles/global'

import { site } from '@/config/site'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import * as S from './styles'

type Props = {
  children?: ReactNode
}

export const Pages = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>
          Introdução - {site.description} | {site.title}
        </title>
      </Head>

      <GlobalStyle layout="pages" />

      <Header />

      <main>
        <S.Wrapper>{children}</S.Wrapper>
      </main>

      <Footer />
    </>
  )
}
