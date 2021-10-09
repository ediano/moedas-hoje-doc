import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

import Image from 'components/Image'

import { SectionScreenFull } from 'types/home'

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

          <Link href={pageUrl} passHref>
            <S.Button as="a">{button}</S.Button>
          </Link>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default ScreenFull
