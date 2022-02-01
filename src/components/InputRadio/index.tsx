import styled from "styled-components"

const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 10px;
`

const Input = styled.input`
  padding: 0;
  height: 22px;
  width: 22px;
  border-radius: 15px;
  margin-bottom: 0;
  position: absolute;
  opacity: 0;
  background: var(--white);

  &:checked + .label:before {
    background: var(--white);
  }
  &:checked + .label:after {
    content: "";
    position: absolute;
    left: 5px;
    top: 8px;
    background: var(--main-color);
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 var(--main-color), 4px 0 0 var(--main-color),
      4px -2px 0 var(--main-color), 4px -4px 0 var(--main-color),
      4px -6px 0 var(--main-color), 4px -8px 0 var(--main-color);
    transform: rotate(45deg);
  }
`
const Span = styled.span`
  position: relative;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  margin-left: 10px;
  color: var(--gray-text-color);
  padding: 0;
  &:before {
    content: "";
    border: 1px solid var(--main-color);
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: white;
  }
`

type TProps = {
  name: string
  id?: string
  label?: string
  value?: string | number
  disabled?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const InputRadio = ({ name, id, label, value, disabled, onChange }: TProps) => {
  const fieldProps = {
    name: name,
    id: id ?? name,
    disabled: disabled,
  }

  return (
    <Label>
      <Input type="radio" {...fieldProps} onChange={onChange} value={value} />
      <Span className="label">{label}</Span>
    </Label>
  )
}

export default InputRadio
