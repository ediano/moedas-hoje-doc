import { GetStaticProps } from 'next'

import { Home } from '@/layout/home'
import WhatWweDo from '@/components/Home/WhatWweDo'
import LimitAndDelay from '@/components/Home/LimitAndDelay'
import DeployAndCdn from '@/components/Home/DeployAndCdn'

import {
  HomeProps,
  Attributes,
  SectionScreenFull,
  SectionWhatWweDo,
  SectionLimitAndDelay,
  SectionDeployAndCdn
} from '@/types/content'

type Props = HomeProps

const Index = ({
  screenFull,
  whatWweDo,
  limitAndDelay,
  deployAndCdn
}: Props) => {
  return (
    <Home screenFull={screenFull}>
      <WhatWweDo {...whatWweDo} />
      <LimitAndDelay {...limitAndDelay} />
      <DeployAndCdn {...deployAndCdn} />
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

  const { attributes: deployAndCdn } = (await import(
    'content/home/deploy-and-cdn.md'
  )) as Attributes<SectionDeployAndCdn>

  return {
    props: {
      screenFull,
      whatWweDo: { ...whatWweDo, body: bodyWhatWweDo },
      limitAndDelay,
      deployAndCdn
    }
  }
}

export default Index
