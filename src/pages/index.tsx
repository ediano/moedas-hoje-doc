import { GetStaticProps } from 'next'

import { Home } from '@/layout/home'
import Exchange from '@/components/Home/Exchange'

import {
  HomeProps,
  Attributes,
  SectionScreenFull,
  SectionExchange
} from '@/types/content'

type Props = HomeProps

const Index = ({ screenFull, exchange }: Props) => {
  return (
    <Home screenFull={screenFull}>
      <Exchange {...exchange} />
    </Home>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { attributes: screenFull } = (await import(
    'content/home/screen-full.md'
  )) as Attributes<SectionScreenFull>

  const { attributes: exchange, body: bodyExchange } = (await import(
    'content/home/exchanges.md'
  )) as Attributes<SectionExchange>

  return {
    props: {
      screenFull,
      exchange: { ...exchange, body: bodyExchange }
    }
  }
}

export default Index
