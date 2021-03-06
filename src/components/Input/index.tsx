import React, { useState, forwardRef, InputHTMLAttributes } from 'react'

import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

type Props = {
  placeholder: string
  name: string
  isLabel?: boolean
} & InputProps

const Input = (
  { isLabel, name, placeholder, ...props }: Props,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const inputRef = ref as React.MutableRefObject<HTMLInputElement>
  const [isFocus, setIsFocus] = useState(false)

  return (
    <S.Container isLabel>
      {isLabel && (
        <S.Label htmlFor={name} isFocus={isFocus || !!inputRef?.current?.value}>
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
    </S.Container>
  )
}

export default forwardRef(Input)
