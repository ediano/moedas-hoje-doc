import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import { ThemeProvider } from 'styled-components'

import { site } from 'config/site'
import { getUrl } from 'utils/getUrl'

import theme from 'styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#27a9e1" />
        <link rel="shortcut icon" href="/favicon.jpg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
        <meta
          name="google-site-verification"
          content="kdtNSZUpZOllXE_2LYmxADhDm5lDCPxpwaK4629ul5c"
        />
      </Head>
      <DefaultSeo
        description={site.description}
        titleTemplate={`%s | ${site.name}`}
        openGraph={{
          type: 'website',
          url: site.url,
          title: `${site.title} | ${site.name}`,
          description: site.description,
          site_name: site.name,
          locale: 'pt_BR',
          images: [
            {
              url: getUrl(site.favicon),
              alt: site.name
            }
          ]
        }}
      />
      <LogoJsonLd logo={getUrl(`${site.favicon}`)} url={site.url} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
