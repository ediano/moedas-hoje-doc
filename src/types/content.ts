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

type WhatWweDoProps = {
  title: string
  link: string
}

export type SectionWhatWweDo = {
  list: WhatWweDoProps[]
  body: string
}

export type SectionLimitAndDelay = {
  catchphrase: string
  limit: string
  delay: string
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
}

export type HomeProps = {
  screenFull: SectionScreenFull
  whatWweDo: SectionWhatWweDo
  limitAndDelay: SectionLimitAndDelay
  deployAndCdn: SectionDeployAndCdn
}