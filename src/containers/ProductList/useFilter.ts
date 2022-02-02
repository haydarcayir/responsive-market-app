import SORTING_OPTIONS from "libs/constants/SORTING_OPTIONS"
import { useSelector } from "react-redux"

import { TRootReducer } from "libs/models/root-reducer-model"
import { TItem } from "libs/models/item-model"

const useFilter = (itemType: string) => {
  const appState = useSelector((state: TRootReducer) => state.app)
  const items = useSelector((state: TRootReducer) => state.items)

  let filteredItemsByItemType = items?.data?.filter(
    (i) => i.itemType === itemType
  )

  if (appState?.filteredBrands?.length) {
    let filteredItemsByBrand: TItem[] = []

    appState.filteredBrands.forEach((brand) => {
      const filtered = filteredItemsByItemType.filter(
        (i) => i.manufacturer === brand
      )
      filteredItemsByBrand = [...filteredItemsByBrand, ...filtered]
    })

    if (filteredItemsByBrand.length) {
      filteredItemsByItemType = filteredItemsByBrand
    }
  }

  if (appState?.filteredTags?.length) {
    let filteredItemsByTag: TItem[] = []
    appState.filteredTags.forEach((tag) => {
      const filtered = filteredItemsByItemType.filter((i) =>
        i.tags.includes(tag)
      )
      filteredItemsByTag = [...filteredItemsByTag, ...filtered]
    })

    if (filteredItemsByTag.length) {
      filteredItemsByItemType = filteredItemsByTag
    }
  }

  if (appState.sort) {
    switch (Number(appState.sort)) {
      case SORTING_OPTIONS.NEW_TO_OLD.value: {
        filteredItemsByItemType.sort((a: any, b: any) => b.added - a.added)
        break
      }
      case SORTING_OPTIONS.OLD_TO_NEW.value: {
        filteredItemsByItemType.sort((a: any, b: any) => a.added - b.added)
        break
      }
      case SORTING_OPTIONS.PRICE_HIGH_TO_LOW.value: {
        filteredItemsByItemType.sort((a: any, b: any) => b.price - a.price)
        break
      }
      case SORTING_OPTIONS.PRICE_LOW_TO_HIGH.value: {
        filteredItemsByItemType.sort((a: any, b: any) => a.price - b.price)
        break
      }
    }
  }

  return { filteredItemsByItemType }
}
export default useFilter
