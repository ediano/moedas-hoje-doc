import { useRef, useCallback, useState, ChangeEvent, FormEvent } from 'react'
import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { NextSeo } from 'next-seo'

import { Pages } from 'layout/pages'
import { AttributesMarkdown } from 'types/markdown'
import { TickersPageProps } from 'types/pages'

import Title from 'components/Title'
import Code from 'components/Code'
import RunApi from 'components/RunApi'

import Input from 'components/Input'
import Select from 'components/Select'
import ButtonRun from 'components/ButtonRun'

import { site } from 'config/site'
import { getUrl } from 'utils/getUrl'
import { api } from 'services/axios'

type Props = TickersPageProps

const options = [
  { label: 'Exchange', value: 'source' },
  { label: 'Tipo de ativo', value: 'asset' }
]

const Tickers = ({
  title,
  body,
  versions,
  patchUrl,
  dataApi,
  asset,
  source,
  description
}: Props) => {
  const [data, setData] = useState(dataApi)
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [option, setOption] = useState('')

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target

      if (option) setQuery(`${option + '=' + value}`)

      if (!option) setQuery('invalid option')
    },
    [option]
  )

  const handleChangeSelect = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target
      setOption(value)
      setQuery(value)
    },
    []
  )

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()
      const response = await api.get(`${versions}/${patchUrl}?${query}`)
      setData(response.data)
    },
    [versions, patchUrl, query]
  )

  return (
    <>
      <NextSeo
        title={`${title} | ${site.name}`}
        canonical={`${site.url}/tickers`}
        openGraph={{
          title: `${title} | ${site.name}`,
          description,
          site_name: `${title} | ${site.name}`,
          url: getUrl('/tickers')
        }}
      />

      <Pages title={title}>
        <Title title={title} />

        <ReactMarkdown children={body} />

        <RunApi
          onSubmit={handleSubmit}
          method="GET"
          patchUrl={`${versions}/${patchUrl}`}
          query={query}
        >
          <Select
            name="query"
            options={options}
            onChange={handleChangeSelect}
          />
          <Input
            ref={inputRef}
            name="tickers"
            placeholder={`Query example (opcional): ${source} | ${asset}`}
            isLabel
            onChange={handleChangeInput}
          />
          <ButtonRun type="submit">Run</ButtonRun>
        </RunApi>

        <Code code={data} type="Array<Object> | Object" maxHeight="500px" />
      </Pages>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { attributes, body } = (await import(
    'content/pages/tickers.md'
  )) as AttributesMarkdown<TickersPageProps>

  const response = await api.get(
    `${attributes.versions}/${attributes.patchUrl}`
  )

  return {
    props: { ...attributes, body, dataApi: response.data }
  }
}

export default Tickers
