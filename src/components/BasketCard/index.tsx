import styled from "styled-components"

import BasketCardItem from "components/BasketCard/BasketCardItem"
import PriceLabel from "components/PriceLabel"

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

const BasketCard = () => {
  return (
    <Container>
      <BasketCardItem />
      <BasketCardItem />
      <BasketCardItem />
      <PriceLabelContainer>
        <PriceLabelWrapper>
          <PriceLabel>39.97</PriceLabel>
        </PriceLabelWrapper>
      </PriceLabelContainer>
    </Container>
  )
}

export default BasketCard
