import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { NextSeo } from 'next-seo'

import { Pages } from 'layout/pages'
import { AttributesMarkdown } from 'types/markdown'
import { IntroductionPageProps } from 'types/pages'

import Code from 'components/Code'
import RunApi from 'components/RunApi'
import Title from 'components/Title'

import { site } from 'config/site'
import { getUrl } from 'utils/getUrl'
import { api } from 'services/axios'

type Props = IntroductionPageProps

const Introduction = ({
  title,
  subtitle,
  body,
  dataApi,
  description
}: Props) => {
  return (
    <>
      <NextSeo
        title={`${title} | ${site.name}`}
        canonical={`${site.url}/introducao`}
        openGraph={{
          title: `${title} | ${site.name}`,
          description,
          site_name: `${title} | ${site.name}`,
          url: getUrl('/introducao')
        }}
      />

      <Pages title={title}>
        <Title title={subtitle} />
        <ReactMarkdown children={body} />

        <RunApi method="GET" />

        <Code code={dataApi} type="Object" />
      </Pages>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('')

  const { attributes, body } = (await import(
    'content/pages/introduction.md'
  )) as AttributesMarkdown<IntroductionPageProps>

  return {
    props: { ...attributes, body, dataApi: response.data }
  }
}

export default Introduction
