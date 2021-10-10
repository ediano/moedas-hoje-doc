import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { NextSeo } from 'next-seo'

import { Pages } from 'layout/pages'
import { AttributesMarkdown } from 'types/markdown'
import { ExchangesPageProps } from 'types/pages'

import Title from 'components/Title'
import Code from 'components/Code'
import RunApi from 'components/RunApi'

import { site } from 'config/site'
import { getUrl } from 'utils/getUrl'
import { api } from 'services/axios'

type Props = ExchangesPageProps

const Exchanges = ({
  title,
  body,
  versions,
  patchUrl,
  dataApi,
  description
}: Props) => {
  return (
    <>
      <NextSeo
        title={`${title} | ${site.name}`}
        canonical={`${site.url}/exchanges`}
        openGraph={{
          title: `${title} | ${site.name}`,
          description,
          site_name: `${title} | ${site.name}`,
          url: getUrl('/exchanges')
        }}
      />

      <Pages title={title}>
        <Title title={title} />

        <ReactMarkdown children={body} />

        <RunApi method="GET" patchUrl={`${versions}/${patchUrl}`} />

        <Code code={dataApi} type="Object" maxHeight="500px" />
      </Pages>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { attributes, body } = (await import(
    'content/pages/exchanges.md'
  )) as AttributesMarkdown<ExchangesPageProps>

  const response = await api.get(
    `${attributes.versions}/${attributes.patchUrl}`
  )

  return {
    props: { ...attributes, body, dataApi: response.data }
  }
}

export default Exchanges
