import { createSlice } from "@reduxjs/toolkit"

type SliceState = {
  sort: number | undefined
  filteredBrands: string[]
  filteredTags: string[]
}

const appSlice = createSlice({
  name: "app",
  initialState: {
    sort: undefined,
    filteredBrands: [],
    filteredTags: [],
  } as SliceState,
  reducers: {
    setApp(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

export const { setApp } = appSlice.actions

export default appSlice.reducer
