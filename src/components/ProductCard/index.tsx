import styled from "styled-components"
import Button from "components/Button"
import PriceLabel from "components/PriceLabel"
import ProductNameLabel from "components/ProductNameLabel"

const Container = styled.div`
  width: 150px;
  height: auto;
`
const ImageContainer = styled.div`
  width: 150px;
  border: 1px solid var(--border-color);
  border-radius: 20px;
`
const Image = styled.img`
  width: 100px;
  height: 100px;
  margin: 20px;
  background-color: gray;
`

const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
`

export type TProps = {
  name: string
  price: number
  added?: number
  description?: string
  itemType?: string
  manufacturer?: string
  slug?: string
  tags?: string[]
}

type TPropss = {
  item: {
    name: string
    price: number
    added?: number
    description?: string
    itemType?: string
    manufacturer?: string
    slug?: string
    tags?: string[]
  }
  onClick: (item: any) => void
  basketItems: object[]
}

const ProductCard = ({ item, onClick, basketItems }: TPropss) => {
  const isBtnDisabled: boolean = basketItems.some(
    (b: any) => b.slug === item.slug
  )
  return (
    <Container>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <ProductInfo>
        <PriceLabel>{item.price}</PriceLabel>
        <ProductNameLabel>{item.name}</ProductNameLabel>
        <Button
          disabled={isBtnDisabled}
          text={isBtnDisabled ? "Added" : "Add"}
          className="w-100"
          onClick={() => onClick(item)}
        />
      </ProductInfo>
    </Container>
  )
}

export default ProductCard
