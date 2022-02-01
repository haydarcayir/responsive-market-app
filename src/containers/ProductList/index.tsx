import { useState, useEffect } from "react"
import Button from "components/Button"
import ProductCard from "components/ProductCard"
import styled from "styled-components"
import BUTTON_TYPE_OPTIONS from "libs/constants/BUTTON_TYPE_OPTIONS"
import BUTTON_SIZE_OPTIONS from "libs/constants/BUTTON_SIZE_OPTIONS"
import BREAKPOINTS from "libs/constants/BREAKPOINTS"
import Pagination from "components/Pagination"
import { Portal } from "react-portal"
import BasketCard from "components/BasketCard"
import { TProps as TPropsProductCard } from "components/ProductCard"

import { useDispatch, useSelector } from "react-redux"
import { getItems } from "redux/ducks/itemSlice"
import { getCompanies } from "redux/ducks/companySlice"

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

const itemTypes = {
  mug: "mug",
  shirt: "shirt",
}

const ProductList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [itemType, setItemType] = useState<string>(itemTypes.mug)
  const [page, setPage] = useState<number>(1)
  const items = useSelector((state: any) => state.items)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItems())
    dispatch(getCompanies())
  }, [dispatch, page])

  const filteredItemsByItemType = items?.data?.filter(
    (i: any) => i.itemType === itemType
  )

  const listedItems =
    filteredItemsByItemType.slice((page - 1) * 16, page * 16) || []

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
        variant={
          itemType === itemTypes.mug
            ? BUTTON_TYPE_OPTIONS.PRIMARY
            : BUTTON_TYPE_OPTIONS.SECONDARY
        }
        onClick={() => setItemType(itemTypes.mug)}
      />
      <Button
        text="shirt"
        variant={
          itemType === itemTypes.shirt
            ? BUTTON_TYPE_OPTIONS.PRIMARY
            : BUTTON_TYPE_OPTIONS.SECONDARY
        }
        size={BUTTON_SIZE_OPTIONS.BTN_LARGE}
        onClick={(e) => setItemType(itemTypes.shirt)}

        // onClick={(e) => setIsOpen(!isOpen)}
      />
      <Container>
        {listedItems.map((item: TPropsProductCard) => (
          <ProductCard item={item} />
        ))}
      </Container>
      <Pagination
        pageCount={Math.ceil(filteredItemsByItemType.length / 16)}
        onPageChange={({ selected }) => setPage(selected + 1)}
      />
    </div>
  )
}

export default ProductList
