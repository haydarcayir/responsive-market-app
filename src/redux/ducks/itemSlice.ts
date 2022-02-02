import { createSlice } from "@reduxjs/toolkit"

type TSliceState =
  | { state: "loading"; data: object[] }
  | { state: "finished"; data: object[] }
  | {
      loading: boolean
      error: boolean
      contractsData?: []
    }

const itemSlice = createSlice({
  name: "items",
  initialState: { state: "loading", data: [] } as TSliceState,
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
