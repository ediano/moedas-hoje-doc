import { ReactNode } from 'react'

import * as S from './styles'

export type MethodProps = 'GET' | 'POST' | 'PUT' | 'DELETE'

type Props = {
  method: MethodProps
  url: string
  query?: string
  setRun?: (url: string) => string
  children?: ReactNode
}

const RunApi = ({ method, url, query, setRun, children }: Props) => {
  return <S.Container>{children}</S.Container>
}

export default RunApi
