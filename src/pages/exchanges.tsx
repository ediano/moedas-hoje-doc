import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'

import { Pages } from 'layout/pages'
import { AttributesMarkdown } from 'types/markdown'
import { IntroductionProps } from 'types/pages'

import Code from 'components/Code'
import RunApi from 'components/RunApi'

import { api } from 'services/axios'

import * as S from 'styles/pages/introducao'

type Props = IntroductionProps

const Exchanges = ({ title, subtitle, body, dataApi }: Props) => {
  return (
    <Pages title={title}>
      <S.Title>{subtitle}</S.Title>
      <ReactMarkdown children={body} />

      <RunApi method="GET" />

      <Code code={dataApi} lang="json" type="Object" />
    </Pages>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('')

  const { attributes, body } = (await import(
    'content/pages/introduction.md'
  )) as AttributesMarkdown<IntroductionProps>

  return {
    props: { ...attributes, body, dataApi: response.data }
  }
}

export default Exchanges
