import { createSlice } from "@reduxjs/toolkit"
import { TItem } from "libs/models/item-model"

export type TSliceItem =
  | { state: "loading"; data: TItem[] }
  | { state: "finished"; data: TItem[] }

const itemSlice = createSlice({
  name: "items",
  initialState: { state: "loading", data: [] } as TSliceItem,
  reducers: {
    getItems(state, action) {},
    setItems(state, action) {
      return {
        state: "finished",
        data: [...action.payload],
      }
    },
  },
})

export const { getItems, setItems } = itemSlice.actions

export default itemSlice.reducer
