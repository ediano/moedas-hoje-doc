import { ReactNode } from 'react'
import Head from 'next/head'

import GlobalStyle from 'styles/global'
import ScreenFull from 'components/ScreenFull'

import { site } from 'config/site'
import HeaderHome from 'components/HeaderHome'
import Footer from 'components/Footer'
import { SectionScreenFull } from 'types/home'

type Props = {
  children: ReactNode
  screenFull?: SectionScreenFull
}

export const Home = ({ children, screenFull }: Props) => {
  return (
    <>
      <Head>
        <title>
          {site.title} | {site.name}
        </title>
      </Head>

      <GlobalStyle />

      <HeaderHome>{screenFull && <ScreenFull {...screenFull} />}</HeaderHome>

      <main>{children}</main>

      <Footer />
    </>
  )
}
