import { ReactNode } from 'react'
import Head from 'next/head'

import GlobalStyle from '@/styles/global'
import ScreenFull from '@/components/ScreenFull'

import { site } from '@/config/site'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SectionScreenFull } from '@/types/content'

type Props = {
  children: ReactNode
  screenFull?: SectionScreenFull
}

export const Home = ({ children, screenFull }: Props) => {
  return (
    <>
      <Head>
        <title>
          {site.description} | {site.title}
        </title>
      </Head>

      <GlobalStyle />

      <Header>
        <ScreenFull {...screenFull} />
      </Header>

      <main>{children}</main>

      <Footer />
    </>
  )
}
