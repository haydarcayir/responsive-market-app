import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TSliceState = {
  sort?: number | undefined
  filteredBrands?: string[]
  filteredTags?: string[]
}

const appSlice = createSlice({
  name: "app",
  initialState: {
    sort: undefined,
    filteredBrands: [],
    filteredTags: [],
  } as TSliceState,
  reducers: {
    setApp(state, action: PayloadAction<TSliceState>) {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

export const { setApp } = appSlice.actions

export default appSlice.reducer
