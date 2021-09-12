import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

const ButtonRun = ({
  children,
  type = 'submit',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <S.Button type={type} {...props}>
      {children}
    </S.Button>
  )
}

export default ButtonRun
