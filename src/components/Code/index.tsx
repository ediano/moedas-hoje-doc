import { useState, useEffect } from 'react'

import * as S from './styles'

type Props = {
  code: string
  lang?: string
  type?: string
  maxHeight?: string
}

const Code = ({ code, lang = 'json', type, maxHeight }: Props) => {
  const [typeOfStructure, setTypeOfStructure] = useState('')

  useEffect(() => {
    if (type) setTypeOfStructure(`${type} : ${lang.toLocaleUpperCase()}`)
    if (!type) setTypeOfStructure(`${lang.toLocaleUpperCase()}`)
  }, [type, lang])

  return (
    <S.Container>
      {lang ? (
        <>
          {lang && <S.Lang>{typeOfStructure}</S.Lang>}
          <S.Pre maxHeight={maxHeight} className={`highlight language-${lang}`}>
            <S.Code className={`language-${lang}`}>
              {JSON.stringify(code, null, 2)}
            </S.Code>
          </S.Pre>
        </>
      ) : (
        <S.CodeNone className="language-none">{code}</S.CodeNone>
      )}
    </S.Container>
  )
}

export default Code
