import ReactMarkdown from 'react-markdown'
import { IoLogoVercel } from 'react-icons/io5'
import { MdCached } from 'react-icons/md'

import { SectionDeployAndCdn } from 'types/home'

import * as S from './styles'

type Props = SectionDeployAndCdn

const DeployAndCdn = ({ catchphrase, description, links, body }: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>{catchphrase}</S.Title>

        <S.Description>{description}</S.Description>

        <S.Content>
          <div>
            <ReactMarkdown children={body} />
          </div>

          <S.ListContent>
            <S.Link>
              {links?.map(item => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {item?.icon ? <IoLogoVercel /> : item.title}
                </a>
              ))}
            </S.Link>

            <MdCached />
          </S.ListContent>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default DeployAndCdn
