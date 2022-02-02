import { createSlice, PayloadAction, current } from "@reduxjs/toolkit"
import { TItem as TDefaultItem } from "libs/models/item-model"

type TItem = TDefaultItem & { count: number }

export type TSliceState = {
  items: TItem[]
}

const basketSlice = createSlice({
  name: "basket",
  initialState: { items: [] } as TSliceState,
  reducers: {
    addItemToBasket(state, action: PayloadAction<TItem>) {
      state.items.push({ ...action.payload, count: 1 })
      return state
    },
    increaseItemCount(state, action: PayloadAction<TItem>) {
      const currentItems = [...current(state.items)]
      const increasedItemIndex = currentItems.findIndex(
        (i) => i.slug === action.payload.slug
      )
      const newData = {
        ...state.items[increasedItemIndex],
        count: state.items[increasedItemIndex].count + 1,
      }
      currentItems.splice(increasedItemIndex, 1, newData)
      return { ...state, items: currentItems }
    },
    decreaseItemCount(state, action: PayloadAction<TItem>) {
      const currentItems = [...current(state.items)]
      const increasedItemIndex = currentItems.findIndex(
        (i) => i.slug === action.payload.slug
      )
      const newData = {
        ...state.items[increasedItemIndex],
        count: state.items[increasedItemIndex].count - 1,
      }
      if (newData.count === 0) currentItems.splice(increasedItemIndex, 1)
      else currentItems.splice(increasedItemIndex, 1, newData)
      return { ...state, items: currentItems }
    },
  },
})

export const { addItemToBasket, increaseItemCount, decreaseItemCount } =
  basketSlice.actions

export default basketSlice.reducer
