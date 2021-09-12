import { useRef, useCallback, useState, ChangeEvent, FormEvent } from 'react'
import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'

import { Pages } from 'layout/pages'
import { AttributesMarkdown } from 'types/markdown'
import { TickerPageProps } from 'types/pages'

import Title from 'components/Title'
import Code from 'components/Code'
import RunApi from 'components/RunApi'

import Input from 'components/Input'
import ButtonRun from 'components/ButtonRun'

import { api } from 'services/axios'

type Props = TickerPageProps

const Ticker = ({
  title,
  body,
  versions,
  patchUrl,
  dataApi,
  symbol,
  symbolSource
}: Props) => {
  const [data, setData] = useState(dataApi)
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setQuery(value)
    },
    []
  )

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()
      const response = await api.get(
        `${versions}/${patchUrl}?${symbol}${query && '&' + query}`
      )
      setData(response.data)
    },
    [versions, patchUrl, symbol, query]
  )

  return (
    <Pages title={title}>
      <Title title={title} />

      <ReactMarkdown children={body} />

      <RunApi
        onSubmit={handleSubmit}
        method="GET"
        patchUrl={`${versions}/${patchUrl}`}
        query={`${symbol}${query && '&' + query}`}
      >
        <Input
          ref={inputRef}
          name="ticker"
          placeholder={`Query example: ${symbol} | ${symbolSource}`}
          isLabel
          onChange={handleChangeInput}
        >
          <ButtonRun type="submit">Run</ButtonRun>
        </Input>
      </RunApi>

      <Code code={data} type="Array<Object> | Object" maxHeight="500px" />
    </Pages>
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
