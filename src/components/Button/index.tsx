import { ReactNode } from 'react'
import Link from 'next/link'

import * as S from './styles'

type Props = {
  href?: string
  children: ReactNode
  color?: string
  background?: string
}

const Button = ({ href, children, ...res }: Props) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <S.Button as="a" {...res}>
          {children}
        </S.Button>
      </Link>
    )
  }

  return <S.Button {...res}>{children}</S.Button>
}

export default Button
