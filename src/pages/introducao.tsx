import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'

import { Pages } from '@/layout/pages'
import { Code } from '@/components/Code'
import { AttributesMarkdown } from '@/types/markdown'

import { IntroductionProps } from '@/types/pages'

import * as S from '@/styles/pages/introducao'

type Props = IntroductionProps

const Introducao = ({ title, baseUrl, subtitle, body }: Props) => {
  return (
    <Pages title={title}>
      <S.Title>{subtitle}</S.Title>

      <ReactMarkdown children={body} />

      <Code code={baseUrl} />
    </Pages>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { attributes, body } = (await import(
    'content/pages/introduction.md'
  )) as AttributesMarkdown<IntroductionProps>

  return {
    props: { ...attributes, body }
  }
}

export default Introducao
