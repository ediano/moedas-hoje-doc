import { ImageProps } from 'next/image'

export type Attributes<T> = {
  attributes: T
  body?: string
}

export type SectionScreenFull = {
  catchphrase: string
  description: string
  image: ImageProps[]
  button: string
  pageUrl: string
}

type FocusAndIdeaProps = {
  title: string
  link: string
}

export type SectionFocusAndIdea = {
  list: FocusAndIdeaProps[]
  body: string
}

type LinkDeployAndCdn = {
  title: string
  link: string
  icon?: string
}

export type SectionDeployAndCdn = {
  catchphrase: string
  description: string
  links: LinkDeployAndCdn[]
  body: string
}

export type SectionLimitAndDelay = {
  catchphrase: string
  limit: string
  delay: string
}

export type HomeProps = {
  screenFull: SectionScreenFull
  focusAndIdea: SectionFocusAndIdea
  deployAndCdn: SectionDeployAndCdn
  limitAndDelay: SectionLimitAndDelay
}
