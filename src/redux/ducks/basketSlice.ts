import { createSlice, PayloadAction, current } from "@reduxjs/toolkit"

type CounterState = {
  items: { count: number }[]
}

const initialState: CounterState = {
  items: [],
}

const basketSlice: any = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    addItemToBasket(state, action: PayloadAction<object[]>) {
      state.items.push({ ...action.payload, count: 1 })
      return state
    },
    increaseItemCount(state, action) {
      const currentItems = [...current(state.items)]
      const increasedItemIndex: any = currentItems.findIndex(
        (i: any) => i.slug === action.payload.slug
      )
      const newData = {
        ...state.items[increasedItemIndex],
        count: state.items[increasedItemIndex].count + 1,
      }
      currentItems.splice(increasedItemIndex, 1, newData)
      return { ...state, items: currentItems }
    },
    decreaseItemCount(state, action) {
      const currentItems = [...current(state.items)]
      const increasedItemIndex: any = currentItems.findIndex(
        (i: any) => i.slug === action.payload.slug
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

export const {
  addItemToBasket,
  removeItemFromBasket,
  increaseItemCount,
  decreaseItemCount,
} = basketSlice.actions

export default basketSlice.reducer
