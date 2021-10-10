import { useRef, useCallback, useState, ChangeEvent, FormEvent } from 'react'
import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { NextSeo } from 'next-seo'

import { Pages } from 'layout/pages'
import { AttributesMarkdown } from 'types/markdown'
import { TickerPageProps } from 'types/pages'

import Title from 'components/Title'
import Code from 'components/Code'
import RunApi from 'components/RunApi'

import Input from 'components/Input'
import ButtonRun from 'components/ButtonRun'

import { site } from 'config/site'
import { getUrl } from 'utils/getUrl'
import { api } from 'services/axios'

type Props = TickerPageProps

const Ticker = ({
  title,
  body,
  versions,
  patchUrl,
  dataApi,
  symbol,
  symbolSource,
  description
}: Props) => {
  const [data, setData] = useState<any>(dataApi)
  const symbolRef = useRef<HTMLInputElement>(null)
  const symbolSourceRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState({ symbol, source: '' })

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target

      setQuery(state => {
        if (name === 'source') {
          return { ...state, source: value ? `source=${value}` : '' }
        }

        return { ...state, symbol: value ? `symbol=${value}` : '' }
      })
    },
    []
  )

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()
      try {
        const response = await api.get(
          `${versions}/${patchUrl}${query.symbol && '?' + query.symbol}${
            query.source && '&' + query.source
          }`
        )
        setData(response.data)
      } catch (error) {
        setData(error)
      }
    },
    [versions, patchUrl, query]
  )

  return (
    <>
      <NextSeo
        title={`${title} | ${site.name}`}
        canonical={`${site.url}/ticker`}
        openGraph={{
          title: `${title} | ${site.name}`,
          description,
          site_name: `${title} | ${site.name}`,
          url: getUrl('/ticker')
        }}
      />

      <Pages title={title}>
        <Title title={title} />

        <ReactMarkdown children={body} />

        <RunApi
          onSubmit={handleSubmit}
          method="GET"
          patchUrl={`${versions}/${patchUrl}`}
          query={`${query.symbol}${query.source ? '&' + query.source : ''}`}
          style={{ marginTop: '50px' }}
        >
          <Input
            ref={symbolRef}
            name="symbol"
            placeholder={`Query example: ${symbol}`}
            isLabel
            onChange={handleChangeInput}
          />

          <Input
            ref={symbolSourceRef}
            name="source"
            placeholder={`Query example (opcional): ${symbolSource}`}
            isLabel
            onChange={handleChangeInput}
          />

          <ButtonRun type="submit">Run</ButtonRun>
        </RunApi>

        <Code code={data} type="Array<Object> | Object" maxHeight="750px" />
      </Pages>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { attributes, body } = (await import(
    'content/pages/ticker.md'
  )) as AttributesMarkdown<TickerPageProps>

  const response = await api.get(
    `${attributes.versions}/${attributes.patchUrl}?${attributes.symbol}`
  )

  return {
    props: { ...attributes, body, dataApi: response.data }
  }
}

export default Ticker
