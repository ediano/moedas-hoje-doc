import React, { FormHTMLAttributes, ReactNode } from 'react'
import { baseURL } from 'services/axios'

import * as S from './styles'

export type MethodProps = 'GET' | 'POST' | 'PUT' | 'DELETE'

type Props = {
  method: MethodProps
  patchUrl?: string
  query?: string
  children?: ReactNode
} & FormHTMLAttributes<HTMLFormElement>

const RunApi = ({ method, patchUrl, query, children, onSubmit }: Props) => {
  return (
    <S.Container onSubmit={onSubmit}>
      <S.Content>
        <S.Method>{method}</S.Method>
        <S.TextUrl>
          {baseURL}
          {patchUrl && `/${patchUrl}`}
          {query && <S.Query>?{query}</S.Query>}
        </S.TextUrl>
      </S.Content>

      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  )
}

export default RunApi
