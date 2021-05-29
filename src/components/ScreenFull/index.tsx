import ReactMarkdown from 'react-markdown'

import Image from '@/components/Image'
import Button from '@/components/Button'

import { SectionScreenFull } from 'src/types/home'

import * as S from './styles'

type Props = SectionScreenFull

const ScreenFull = ({
  catchphrase,
  description,
  image,
  button,
  pageUrl
}: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>{catchphrase}</S.Title>

        <S.ContentGroup>
          <S.Image>
            <Image
              src={image}
              alt="Picture of the author"
              width={496}
              height={368}
            />
          </S.Image>

          <S.Content>
            <ReactMarkdown children={description} />

            <Button href={pageUrl}>{button}</Button>
          </S.Content>
        </S.ContentGroup>
      </S.Wrapper>
    </S.Container>
  )
}

export default ScreenFull
