import { ReactNode } from 'react'
import Head from 'next/head'

import ScreenFull from '@/components/ScreenFull'

import { site } from '@/config/site'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SectionScreenFull } from '@/types/home'

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

      <Header>
        <ScreenFull {...screenFull} />
      </Header>

      {children}

      <Footer />
    </>
  )
}
