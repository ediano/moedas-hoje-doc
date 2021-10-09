import { useRef, useCallback, useState, ChangeEvent, FormEvent } from 'react'
import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'

import { Pages } from 'layout/pages'
import { AttributesMarkdown } from 'types/markdown'
import { AvailablePairsProps } from 'types/pages'

import Title from 'components/Title'
import Code from 'components/Code'
import RunApi from 'components/RunApi'

import Input from 'components/Input'
import ButtonRun from 'components/ButtonRun'

import { api } from 'services/axios'

type Props = AvailablePairsProps

const AvailablePairs = ({
  title,
  body,
  versions,
  patchUrl,
  dataApi,
  source
}: Props) => {
  const [data, setData] = useState<any>(dataApi)
  const sourceRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState({ source: '' })

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target

      setQuery(state => {
        return { ...state, source: value ? `source=${value}` : '' }
      })
    },
    []
  )

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()
      try {
        const response = await api.get(
          `${versions}/${patchUrl}${query.source && '?' + query.source}`
        )
        setData(response.data)
      } catch (error) {
        setData(error)
      }
    },
    [versions, patchUrl, query]
  )

  return (
    <Pages title={title}>
      <Title title={title} />

      <ReactMarkdown children={body} />

      <RunApi
        onSubmit={handleSubmit}
        method="GET"
        patchUrl={`${versions}/${patchUrl}`}
        query={`${query.source ? query.source : ''}`}
        style={{ marginTop: '50px' }}
      >
        <Input
          ref={sourceRef}
          name="source"
          placeholder={`Query example (opcional): ${source}`}
          isLabel
          onChange={handleChangeInput}
        />

        <ButtonRun type="submit">Run</ButtonRun>
      </RunApi>

      <Code code={data} type="Array<Object> | Object" maxHeight="750px" />
    </Pages>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { attributes, body } = (await import(
    'content/pages/available-pairs.md'
  )) as AttributesMarkdown<AvailablePairsProps>

  const response = await api.get(
    `${attributes.versions}/${attributes.patchUrl}`
  )

  return {
    props: { ...attributes, body, dataApi: response.data }
  }
}

export default AvailablePairs
