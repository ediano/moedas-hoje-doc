import * as S from './styles'

export const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>Todos os direitos reservados</S.Content>

        <S.Content>
          <S.CoinsLine>
            <S.CoinsLineIcon />
            Doc
          </S.CoinsLine>

          <S.SiteFooter>
            <a
              href="https://bit.ly/3gz4jkx"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Service status
            </a>
          </S.SiteFooter>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}
