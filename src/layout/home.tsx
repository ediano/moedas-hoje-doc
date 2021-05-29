import { ReactNode } from 'react'
import Head from 'next/head'

import { SiteProps } from '@/config/site'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

type Props = {
  children?: ReactNode
  site: SiteProps
}

export const Home = ({ children, site }: Props) => {
  return (
    <>
      <Head>
        <Head>
          {site.description} | {site.title}
        </Head>
      </Head>

      <Header site={site} isHome />
      <div>flsdklfksçdlkflçdskl</div>
      {children}

      <Footer />
    </>
  )
}
