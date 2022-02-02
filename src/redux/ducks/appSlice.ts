import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type TSliceState = {
  sort?: number | undefined
  filteredBrands?: string[]
  filteredTags?: string[]
  isFilterAreaForMobile?: boolean
  isBasketShowed?: boolean
}

const appSlice = createSlice({
  name: "app",
  initialState: {
    sort: undefined,
    filteredBrands: [],
    filteredTags: [],
    isFilterAreaForMobile: false,
    isBasketShowed: true,
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
