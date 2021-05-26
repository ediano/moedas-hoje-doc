import { Container } from '@/styles/container'

import * as S from './style'

type Props = {
  isHome?: boolean
}

export const Header = ({ isHome }: Props) => {
  return (
    <Container>
      <S.Header>Header</S.Header>
    </Container>
  )
}
