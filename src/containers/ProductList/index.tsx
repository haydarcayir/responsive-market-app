import { useState } from "react"
import Button from "components/Button"
import ProductCard from "components/ProductCard"
import styled from "styled-components"
import BUTTON_TYPE_OPTIONS from "libs/constants/BUTTON_TYPE_OPTIONS"
import BUTTON_SIZE_OPTIONS from "libs/constants/BUTTON_SIZE_OPTIONS"
import BREAKPOINTS from "libs/constants/BREAKPOINTS"
import Pagination from "components/Pagination"
import { Portal } from "react-portal"
import BasketCard from "components/BasketCard"

const Container = styled.div`
  max-width: 850px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  @media ${BREAKPOINTS.laptop} {
    gap: 30px;
  }
`

const BasketContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 0px;
`

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <h2>Product</h2>
      {isOpen && (
        <Portal node={document && document.getElementById("basket")}>
          <BasketContainer>
            <BasketCard />
          </BasketContainer>
        </Portal>
      )}
      <Button
        text="mug"
        size={BUTTON_SIZE_OPTIONS.BTN_LARGE}
        className="mR10"
      />
      <Button
        text="shirt"
        variant={BUTTON_TYPE_OPTIONS.SECONDARY}
        size={BUTTON_SIZE_OPTIONS.BTN_LARGE}
        // onClick={(e) => setIsOpen(!isOpen)}
      />
      <Container>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Container>
      <Pagination />
    </div>
  )
}

export default ProductList
