import SORTING_OPTIONS from "libs/constants/SORTING_OPTIONS"
import { useSelector } from "react-redux"

const useFilter = (items: any, itemType: string) => {
  const appState = useSelector((state: any) => state.app)

  let filteredItemsByItemType = items?.data?.filter(
    (i: any) => i.itemType === itemType
  )

  if (appState?.filteredBrands?.length) {
    let filteredItemsByBrand: any[] = []
    appState.filteredBrands.forEach((brand: any) => {
      const asd = filteredItemsByItemType.filter(
        (i: any) => i.manufacturer === brand
      )
      filteredItemsByBrand = [...filteredItemsByBrand, ...asd]
    })

    if (filteredItemsByBrand.length) {
      filteredItemsByItemType = filteredItemsByBrand
    }
  }

  if (appState?.filteredTags?.length) {
    let filteredItemsByTag: any[] = []
    appState.filteredTags.forEach((tag: any) => {
      const asd = filteredItemsByItemType.filter((i: any) =>
        i.tags.includes(tag)
      )
      filteredItemsByTag = [...filteredItemsByTag, ...asd]
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
