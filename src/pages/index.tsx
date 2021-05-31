import { GetStaticProps } from 'next'

import { Home } from '@/layout/home'
import WhatWweDo from '@/components/Home/WhatWweDo'
import LimitAndDelay from '@/components/Home/LimitAndDelay'

import {
  HomeProps,
  Attributes,
  SectionScreenFull,
  SectionWhatWweDo,
  SectionLimitAndDelay
} from '@/types/content'

type Props = HomeProps

const Index = ({ screenFull, whatWweDo, limitAndDelay }: Props) => {
  return (
    <Home screenFull={screenFull}>
      <WhatWweDo {...whatWweDo} />
      <LimitAndDelay {...limitAndDelay} />
    </Home>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { attributes: screenFull } = (await import(
    'content/home/screen-full.md'
  )) as Attributes<SectionScreenFull>

  const { attributes: whatWweDo, body: bodyWhatWweDo } = (await import(
    'content/home/what-we-do.md'
  )) as Attributes<SectionWhatWweDo>

  const { attributes: limitAndDelay } = (await import(
    'content/home/limits-and-delays.md'
  )) as Attributes<SectionLimitAndDelay>

  return {
    props: {
      screenFull,
      whatWweDo: { ...whatWweDo, body: bodyWhatWweDo },
      limitAndDelay
    }
  }
}

export default Index
