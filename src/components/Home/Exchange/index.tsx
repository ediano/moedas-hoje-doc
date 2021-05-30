import ReactMarkdown from 'react-markdown'

import { SectionExchange } from '@/types/content'

import * as S from './styles'

type Props = SectionExchange

const Exchange = ({ description, body, list }: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <ReactMarkdown children={description} />
          <ReactMarkdown children={body} />
        </S.Content>

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

        <p>e muitas outras...</p>
      </S.Wrapper>
    </S.Container>
  )
}

export default Exchange
