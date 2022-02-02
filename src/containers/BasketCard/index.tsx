import styled from "styled-components"

import BasketCardItem from "components/BasketCardItem"
import PriceLabel from "components/PriceLabel"
import { useDispatch } from "react-redux"
import { increaseItemCount, decreaseItemCount } from "redux/ducks/basketSlice"

const Container = styled.div`
  width: 300px;
  height: auto;
  background-color: var(--white);
  border: 10px solid var(--main-color);
  padding: 5px 15px;
`

const PriceLabelContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

const PriceLabelWrapper = styled.div`
  border: 2.5px solid var(--main-color);
  padding: 10px 20px;
  margin: 10px;
  border-radius: 2.5px;
`

type TProps = {
  baskets: { name: string; count: number; price: number }[]
}

const BasketCard = ({ baskets }: TProps) => {
  const dispatch = useDispatch()

  const handleDecrease = (item: any) => {
    dispatch(decreaseItemCount(item))
  }

  const handleIncrease = (item: any) => {
    dispatch(increaseItemCount(item))
  }

  const totalPrice = baskets.reduce((acc, obj) => {
    return acc + obj.price * obj.count
  }, 0)

  return (
    <Container>
      {baskets.map((basketItem) => {
        return (
          <BasketCardItem
            data={basketItem}
            onClickDec={handleDecrease}
            onClickInc={handleIncrease}
          />
        )
      })}
      <PriceLabelContainer>
        <PriceLabelWrapper>
          <PriceLabel>
            {Number.parseFloat(`${totalPrice}`).toFixed(2)}
          </PriceLabel>
        </PriceLabelWrapper>
      </PriceLabelContainer>
    </Container>
  )
}

export default BasketCard
