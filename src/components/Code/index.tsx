import { useState, useEffect } from 'react'
import prismjs from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-json.min'
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js'

import * as S from './styles'

type Props = {
  code: string
  lang?: string
  type?: string
}

const Code = ({ code, lang, type }: Props) => {
  const [typeOfStructure, setTypeOfStructure] = useState('')

  useEffect(() => {
    prismjs.highlightAll()
  }, [])

  useEffect(() => {
    if (type) setTypeOfStructure(`${type} : ${lang.toLocaleUpperCase()}`)
    if (!type) setTypeOfStructure(`${lang.toLocaleUpperCase()}`)
  }, [type, lang])

  return (
    <S.Container>
      {lang ? (
        <>
          {lang && <S.Lang>{typeOfStructure}</S.Lang>}
          <pre className={`highlight language-${lang}`}>
            <code className={`language-${lang}`}>
              {JSON.stringify(code, null, 2)}
            </code>
          </pre>
        </>
      ) : (
        <S.CodeNone className="language-none">{code}</S.CodeNone>
      )}
    </S.Container>
  )
}

export default Code
