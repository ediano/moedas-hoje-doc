import * as S from './styles'

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  title: string
}

const Title = ({ as = 'h1', title }: Props) => {
  return <S.Title as={as}>{title}</S.Title>
}

export default Title
