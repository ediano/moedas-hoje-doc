import React, { ReactNode } from 'react'

import * as S from './styles'

export type MethodProps = 'GET' | 'POST' | 'PUT' | 'DELETE'

type Props = {
  method: MethodProps
  url: string
  query?: string
  children?: ReactNode
}

const RunApi = ({ method, url, query, children }: Props) => {
  return (
    <S.Container>
      <S.Content>
        <S.Method>{method}</S.Method> {url}
        {query && <S.Query>?{query}</S.Query>}
      </S.Content>

      {children}
    </S.Container>
  )
}

export default RunApi
