import ReactMarkdown from 'react-markdown'

import { SectionFocusAndIdea } from 'types/home'

import * as S from './styles'

type Props = SectionFocusAndIdea

const FocusAndIdea = ({ list, body }: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <ReactMarkdown children={body} />

          <S.ListExchange>
            {list?.map(item => (
              <S.Link
                as="a"
                key={item.title}
                href={item.link}
                rel="nofollow noopener noreferrer"
              >
                {item.title}
              </S.Link>
            ))}
          </S.ListExchange>
        </S.Content>

        <S.Idea>
          <S.IcoFcIdea />
        </S.Idea>
      </S.Wrapper>
    </S.Container>
  )
}

export default FocusAndIdea
