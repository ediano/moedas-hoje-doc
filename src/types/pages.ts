export type IntroductionPageProps = {
  title: string
  subtitle: string
  dataApi: string
  description: string
  body: string
}

export type ExchangesPageProps = {
  title: string
  versions: string
  patchUrl: string
  dataApi: string
  description: string
  body: string
}

export type TickersPageProps = {
  title: string
  versions: string
  patchUrl: string
  dataApi: string
  source: string
  asset: string
  description: string
  body: string
}

export type TickerPageProps = {
  title: string
  versions: string
  patchUrl: string
  dataApi: string
  symbol: string
  symbolSource: string
  description: string
  body: string
}

export type AvailablePairsProps = {
  title: string
  versions: string
  patchUrl: string
  dataApi: string
  source: string
  description: string
  body: string
}
