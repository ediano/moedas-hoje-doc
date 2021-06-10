import { GetStaticProps } from 'next'

import { Home } from '@/layout/home'
import FocusAndIdea from '@/components/Home/FocusAndIdea'
import LimitAndDelay from '@/components/Home/LimitAndDelay'
import DeployAndCdn from '@/components/Home/DeployAndCdn'

import {
  HomeProps,
  Attributes,
  SectionScreenFull,
  SectionFocusAndIdea,
  SectionLimitAndDelay,
  SectionDeployAndCdn
} from '@/types/content'

type Props = HomeProps

const Index = ({
  screenFull,
  focusAndIdea,
  limitAndDelay,
  deployAndCdn
}: Props) => {
  return (
    <Home screenFull={screenFull}>
      <FocusAndIdea {...focusAndIdea} />
      <DeployAndCdn {...deployAndCdn} />
      <LimitAndDelay {...limitAndDelay} />
    </Home>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { attributes: screenFull } = (await import(
    'content/home/screen-full.md'
  )) as Attributes<SectionScreenFull>

  const { attributes: focusAndIdea, body: bodyFocusAndIdea } = (await import(
    'content/home/focus-and-idea.md'
  )) as Attributes<SectionFocusAndIdea>

  const { attributes: deployAndCdn, body: bodyDeployAndCdn } = (await import(
    'content/home/deploy-and-cdn.md'
  )) as Attributes<SectionDeployAndCdn>

  const { attributes: limitAndDelay } = (await import(
    'content/home/limits-and-delays.md'
  )) as Attributes<SectionLimitAndDelay>

  return {
    props: {
      screenFull,
      focusAndIdea: { ...focusAndIdea, body: bodyFocusAndIdea },
      deployAndCdn: { ...deployAndCdn, body: bodyDeployAndCdn },
      limitAndDelay
    }
  }
}

export default Index
