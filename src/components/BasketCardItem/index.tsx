import styled from "styled-components"
import PriceLabel from "components/PriceLabel"
import ProductNameLabel from "components/ProductNameLabel"
import PRODUCT_NAME_HEADING_OPTIONS from "libs/constants/PRODUCT_NAME_HEADING_OPTIONS"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--third-border);
  margin: 30px 0px 15px;
`

const StyledDivLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3px;
`
const StyledDivRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ColoredSpan = styled.span`
  color: var(--main-color);
  font-size: 30px;
  margin: 0 10px;
`
const SquareSpan = styled.span`
  width: 32px;
  height: 32px;
  background-color: var(--main-color);
  color: var(--white);
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

type TData = {
  name: string
  count: number
  price: number
}

type TProps = {
  data: TData
  onClickDec: (data: TData) => void
  onClickInc: (data: TData) => void
}

const BasketCardItem = ({ data, onClickDec, onClickInc }: TProps) => {
  return (
    <Container>
      <StyledDivLeft>
        <ProductNameLabel heading={PRODUCT_NAME_HEADING_OPTIONS.SECONDARY}>
          {data.name}
        </ProductNameLabel>
        <PriceLabel>{data.price}</PriceLabel>
      </StyledDivLeft>
      <StyledDivRight>
        <ColoredSpan onClick={() => onClickDec(data)}>-</ColoredSpan>
        <SquareSpan>{data.count}</SquareSpan>
        <ColoredSpan onClick={() => onClickInc(data)}>+</ColoredSpan>
      </StyledDivRight>
    </Container>
  )
}

export default BasketCardItem
