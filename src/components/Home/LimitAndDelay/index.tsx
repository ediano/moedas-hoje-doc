import ReactMarkdown from 'react-markdown'
import { SectionLimitAndDelay } from '@/types/content'

import * as S from './styles'

type Props = SectionLimitAndDelay

const LimitAndDelay = ({ catchphrase, limit, delay }: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <h1>{catchphrase}</h1>
          <ReactMarkdown className="limit" children={limit} />
          <ReactMarkdown className="delay" children={delay} />
        </S.Content>

        <S.TimeTrap>
          <S.IcoTimeTrap />
        </S.TimeTrap>
      </S.Wrapper>
    </S.Container>
  )
}

export default LimitAndDelay
