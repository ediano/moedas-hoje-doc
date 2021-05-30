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

type ExchangeProps = {
  title: string
  link: string
}

export type SectionExchange = {
  description: string
  list: ExchangeProps[]
  body: string
}

export type HomeProps = {
  screenFull: SectionScreenFull
  exchange: SectionExchange
}
