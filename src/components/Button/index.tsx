import styled from "styled-components"
import cls from "classnames"
import BUTTON_TYPE_OPTIONS from "libs/constants/BUTTON_TYPE_OPTIONS"
import BUTTON_SIZE_OPTIONS from "libs/constants/BUTTON_SIZE_OPTIONS"

const StyledButton = styled.button`
  min-width: 50px;
  padding: 5px 10px;
  height: 23px;
  border-radius: 3px;
  margin: 10px 0px;
  &.${BUTTON_TYPE_OPTIONS.PRIMARY} {
    background-color: var(--main-color);
    color: var(--white);
  }
  &.${BUTTON_TYPE_OPTIONS.SECONDARY} {
    background-color: var(--light-bg);
    color: var(--main-color);
  }
  &.${BUTTON_SIZE_OPTIONS.BTN_LARGE} {
    height: 30px;
  }
  &.${BUTTON_SIZE_OPTIONS.BTN_SMALL} {
    height: 20px;
  }
`

type TProps = {
  text: string
  children?: React.ReactNode | string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  variant?: string
  className?: string
  size?: string
}

const Button = ({
  text,
  children,
  variant = BUTTON_TYPE_OPTIONS.PRIMARY,
  className,
  onClick,
  size = BUTTON_SIZE_OPTIONS.BTN,
}: TProps) => {
  return (
    <StyledButton
      onClick={onClick}
      className={cls(className, {
        [`${size}`]: true,
        [`${variant}`]: true,
      })}
    >
      {text || children}
    </StyledButton>
  )
}

export default Button
