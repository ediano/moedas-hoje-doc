import { SelectHTMLAttributes } from 'react'

import * as S from './styles'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

type Props = {
  name: string
  options: Array<{ label?: string; value: string | number }>
} & SelectProps

const Select = ({ name, options, ...props }: Props) => {
  return (
    <S.Container isLabel>
      <S.Select id={name} name={name} {...props}>
        <option value="">Selecione uma opção (Optional)</option>

        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label || value}
          </option>
        ))}
      </S.Select>
    </S.Container>
  )
}

export default Select
