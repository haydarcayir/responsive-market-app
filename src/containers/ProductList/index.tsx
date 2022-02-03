import { useState, useEffect } from "react"
import Button from "../../components/Button"
import ProductCard from "../../components/ProductCard"
import styled from "styled-components"
import BUTTON_TYPE_OPTIONS from "../../libs/constants/BUTTON_TYPE_OPTIONS"
import BUTTON_SIZE_OPTIONS from "../../libs/constants/BUTTON_SIZE_OPTIONS"
import BREAKPOINTS from "../../libs/constants/BREAKPOINTS"
import Pagination from "../../components/Pagination"
import { Portal } from "react-portal"
import BasketCard from "../BasketCard"

import { useDispatch, useSelector } from "react-redux"
import { getItems } from "../../redux/ducks/itemSlice"
import { getCompanies } from "../../redux/ducks/companySlice"
import { addItemToBasket } from "../../redux/ducks/basketSlice"
import useFilter from "./useFilter"
import { setApp } from "../../redux/ducks/appSlice"

const Container = styled.div`
  margin-left: 20px;
`

const ProductCardContainer = styled.div`
  max-width: 850px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 10px;
  margin-bottom: 20px;
  @media ${BREAKPOINTS.laptop} {
    gap: 30px;
  }
`
const BasketContainer = styled.div`
  position: absolute;
  top: 55px;
  right: 0px;
  @media ${BREAKPOINTS.laptop} {
    top: 80px;
  }
`
const FilterHead = styled.div`
  display: flex;
  flex-grow: 1;
  height: 30px;
  background-color: var(--white);
  margin-bottom: 10px;
  font-weight: 500;
  margin-top: -25px;
  padding-top: 5px;
  div {
    width: 100%;
    text-align: center;
  }
  @media ${BREAKPOINTS.laptop} {
    display: none;
  }
`

const itemTypes = {
  mug: "mug",
  shirt: "shirt",
}
const ITEMS_PER_PAGE = 16

const ProductList = () => {
  const [itemType, setItemType] = useState<string>(itemTypes.mug)
  const [page, setPage] = useState<number>(1)
  const basketState = useSelector((state: any) => state.basket)
  const appState = useSelector((state: any) => state.app)
  const dispatch = useDispatch()
  const { filteredItemsByItemType } = useFilter(itemType)

  useEffect(() => {
    dispatch(getCompanies())
  }, [dispatch])

  useEffect(() => {
    dispatch(getItems({ itemType }))
  }, [dispatch, itemType])

  const listedItems =
    filteredItemsByItemType.slice(
      (page - 1) * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE
    ) || []

  const handleClickFilterAndSort = () => {
    dispatch(setApp({ isFilterAreaForMobile: true }))
  }

  return (
    <Container>
      <FilterHead>
        <div onClick={handleClickFilterAndSort}>Filtrele</div>
        <span> | </span>
        <div onClick={handleClickFilterAndSort}>Sort</div>
      </FilterHead>
      <h2>Product</h2>
      {!!basketState.items.length && appState.isBasketShowed && (
        <Portal node={document && document.getElementById("basket")}>
          <BasketContainer>
            <BasketCard baskets={basketState.items} />
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
      />
      <ProductCardContainer>
        {listedItems.map((item, index) => (
          <ProductCard
            key={index}
            item={item}
            basketItems={basketState.items}
            onClick={(item) => {
              dispatch(addItemToBasket(item))
            }}
          />
        ))}
      </ProductCardContainer>
      <Pagination
        pageCount={Math.ceil(filteredItemsByItemType.length / 16)}
        onPageChange={({ selected }) => setPage(selected + 1)}
      />
    </Container>
  )
}

export default ProductList
