import React, {
  useState,
  forwardRef,
  InputHTMLAttributes,
  MutableRefObject,
  ReactNode
} from 'react'

import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

type Props = {
  placeholder: string
  name: string
  isLabel?: boolean
  children?: ReactNode
} & InputProps

const Input = (
  { isLabel, name, placeholder, children, ...props }: Props,
  ref: MutableRefObject<HTMLInputElement>
) => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <S.Container isLabel>
      {isLabel && (
        <S.Label htmlFor={name} isFocus={isFocus || !!ref?.current?.value}>
          {placeholder}
        </S.Label>
      )}

      <S.Input
        id={name}
        type="text"
        name={name}
        placeholder={isLabel ? '' : placeholder}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        ref={ref}
        {...props}
      />

      {children}
    </S.Container>
  )
}

export default forwardRef(Input)
