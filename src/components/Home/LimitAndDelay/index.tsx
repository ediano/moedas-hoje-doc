import ReactMarkdown from 'react-markdown'
import { SectionLimitAndDelay } from 'types/home'

import * as S from './styles'

type Props = SectionLimitAndDelay

const LimitAndDelay = ({ catchphrase, limit, delay }: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <h1>{catchphrase}</h1>
          <ReactMarkdown children={limit} />
          <ReactMarkdown children={delay} />
        </S.Content>

        <S.Overtime>
          <S.IcoOvertime />
        </S.Overtime>
      </S.Wrapper>
    </S.Container>
  )
}

export default LimitAndDelay
