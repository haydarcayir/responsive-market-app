import styled from "styled-components"
import cls from "classnames"
import PRODUCT_NAME_HEADING_OPTIONS from "libs/constants/PRODUCT_NAME_HEADING_OPTIONS"

const Heading = styled.span`
  color: var(--text-color);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &.${PRODUCT_NAME_HEADING_OPTIONS.PRIMARY} {
    line-height: 20px;
    font-size: 14px;
    font-weight: 600;
  }
  &.${PRODUCT_NAME_HEADING_OPTIONS.SECONDARY} {
    line-height: 18px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.16px;
  }
`

type TProps = {
  children: string
  heading?: string
}

const ProductNameLabel = ({
  children,
  heading = PRODUCT_NAME_HEADING_OPTIONS.PRIMARY,
}: TProps) => {
  return (
    <Heading
      className={cls({
        primary: heading === PRODUCT_NAME_HEADING_OPTIONS.PRIMARY,
        secondary: heading === PRODUCT_NAME_HEADING_OPTIONS.SECONDARY,
      })}
      title={children}
    >
      {children}
    </Heading>
  )
}

export default ProductNameLabel
