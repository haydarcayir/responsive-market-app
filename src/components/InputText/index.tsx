import styled from "styled-components"
import type { InputHTMLAttributes } from "react"

const Input = styled.input`
  height: 48px;
  width: 248px;
  border: 1px solid var(--secondary-border-color);
  color: var(--dark-gray-text-color);
  padding-left: 10px;
  line-height: 24px;
  font-size: 15px;
`

type TProps = {
  name: string
  label?: JSX.Element | string
  id?: string
  value?: string | number
  placeholder?: string
  className?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  disabled?: boolean
  sizeClassName?: string
  isBordered?: boolean
  rest?: Partial<InputHTMLAttributes<HTMLInputElement>>
}

const TextInput = ({
  name,

  label,
  id,
  value,
  placeholder,
  onChange,
  disabled,
  ...rest
}: TProps) => {
  const fieldProps = {
    name: name,
    id: id ?? name,
    label: label,
    placeholder: placeholder,
    disabled: disabled,
  }

  return (
    <Input
      type="text"
      {...fieldProps}
      {...rest}
      value={value}
      onChange={onChange}
    />
  )
}

export default TextInput
