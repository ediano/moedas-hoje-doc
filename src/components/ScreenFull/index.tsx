import ReactMarkdown from 'react-markdown'

import Image from '@/components/Image'

import { SectionScreenFull } from 'src/types/home'

import * as S from './styles'
import React from 'react'

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
        {image?.map(img => (
          <S.Image key={img.alt}>
            <Image {...img} />

            <S.Coins>
              <S.Dollar />
              <S.Bitcoin />
              <S.Ethereum />
            </S.Coins>
          </S.Image>
        ))}

        <S.Content>
          <h1>{catchphrase}</h1>
          <ReactMarkdown children={description} />
          <S.Button href={pageUrl}>{button}</S.Button>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default ScreenFull
