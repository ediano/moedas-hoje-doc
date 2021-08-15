import { useEffect } from 'react'
import prismjs from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-json.min'
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js'

import * as S from './styles'

type Props = {
  code: string
  lang?: string
}

export const Code = ({ code, lang = 'none' }: Props) => {
  useEffect(() => {
    prismjs.highlightAll()
  }, [])

  return (
    <S.Container>
      {lang === 'none' ? '' : <S.Lang>{lang.toLocaleUpperCase()}</S.Lang>}
      <pre className={`highlight language-${lang}`}>
        <code className={`language-${lang}`}>{code}</code>
      </pre>
    </S.Container>
  )
}
