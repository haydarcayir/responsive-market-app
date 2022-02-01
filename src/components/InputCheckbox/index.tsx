import styled from "styled-components"

const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 10px 0px;
`

const Input = styled.input`
  padding: 0;
  height: 22px;
  width: 22px;
  border-radius: 15px;
  margin-bottom: 0;
  position: relative;
  display: none; /* -- */

  &:checked + .label:before {
    background: var(--main-color);
  }
  &:checked + .label:after {
    content: "";
    position: absolute;
    left: 5px;
    top: 8px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
`
const Span = styled.span`
  position: relative;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  color: var(--gray-text-color);
  padding: 0;
  &:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    border-radius: 2.5px;
    background: white;
    box-shadow: 1px 0px 25px -4px var(--box-shadow-color);
  }
`
const CountSpan = styled.span`
  color: var(--dark-gray-text-color);
`

type TProps = {
  name: string
  id?: string
  label?: string
  value?: string
  disabled?: boolean
  count?: number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const InputCheckbox = ({
  name,
  id,
  label,
  value,
  disabled,
  count,
  onChange,
}: TProps) => {
  const fieldProps = {
    name: name,
    id: id ?? name,
    disabled: disabled,
  }

  return (
    <Label>
      <Input
        type="checkbox"
        {...fieldProps}
        onChange={onChange}
        value={value}
      />

      <Span className="label">
        {label}
        {count && <CountSpan> ({count})</CountSpan>}
      </Span>
    </Label>
  )
}

export default InputCheckbox
