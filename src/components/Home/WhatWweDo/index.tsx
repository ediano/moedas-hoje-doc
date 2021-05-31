import ReactMarkdown from 'react-markdown'

import { SectionWhatWweDo } from '@/types/content'

import * as S from './styles'

type Props = SectionWhatWweDo

const WhatWweDo = ({ list, body }: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <ReactMarkdown children={body} />

          <S.ListExchange>
            {list?.map(item => (
              <S.Link
                key={item.title}
                href={item.link}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                {item.title}
              </S.Link>
            ))}
          </S.ListExchange>
        </S.Content>

        <S.BankFill>
          <S.IcoBankFill />
        </S.BankFill>
      </S.Wrapper>
    </S.Container>
  )
}

export default WhatWweDo
