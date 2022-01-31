import styled, { css } from "styled-components"
import PRICE_LABEL_COLOR_OPTIONS from "libs/constants/PRICE_LABEL_COLOR_OPTIONS"

const Label = styled.span`
  font-weight: 600;
  line-height: 18px;
  font-size: 14px;
  letter-spacing: 0.16px;
  margin: 3px 0;

  ${(props) =>
    props.color === PRICE_LABEL_COLOR_OPTIONS.WHITE
      ? css`
          color: var(--white);
        `
      : css`
          color: var(--main-color);
        `};
`

type TProps = {
  children: string | number
  color?: typeof PRICE_LABEL_COLOR_OPTIONS[keyof typeof PRICE_LABEL_COLOR_OPTIONS]
}

const PriceLabel = ({ children, color }: TProps) => {
  return (
    <Label color={color || PRICE_LABEL_COLOR_OPTIONS.BLUE}>₺ {children}</Label>
  )
}

export default PriceLabel
