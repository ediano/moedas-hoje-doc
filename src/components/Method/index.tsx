export type MethodProps = 'GET' | 'POST' | 'PUT' | 'DELETE'

type Props = {
  method: MethodProps
  url: string
  params?: string
  query?: string
}

export const Method = ({ method, url, params, query }: Props) => {
  return <></>
}
