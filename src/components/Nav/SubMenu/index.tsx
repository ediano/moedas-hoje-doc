import Link from 'next/link'
import { listLinks } from './listLinks'

import * as S from './styles'

export const SubMenu = () => {
  return (
    <S.Container>
      <S.ListWrapper>
        {listLinks.map(({ title, attributes }) => (
          <S.ListItem key={title}>
            <Link href={attributes.href} passHref>
              <S.Anchor>{title}</S.Anchor>
            </Link>
          </S.ListItem>
        ))}
      </S.ListWrapper>
    </S.Container>
  )
}
