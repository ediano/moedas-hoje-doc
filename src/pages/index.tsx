import { GetStaticProps } from 'next'

import { Home } from '@/layout/home'

import { Attributes, SectionScreenFull } from '@/types/home'

type Props = {
  screenFull: SectionScreenFull
}

const Index = ({ screenFull }: Props) => {
  return <Home screenFull={screenFull}>dfsd</Home>
}

export const getStaticProps: GetStaticProps = async () => {
  const { attributes: screenFull } = (await import(
    'content/home/screen-full.md'
  )) as Attributes<SectionScreenFull>

  return {
    props: {
      screenFull
    }
  }
}

export default Index
