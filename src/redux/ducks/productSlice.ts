import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
  name: "product",
  initialState: {},
  reducers: {
    getProduct() {},
    setProduct(state, action) {
      return { ...state, ...action.payload }
    },
  },
})

export const { getProduct, setProduct } = productSlice.actions

export default productSlice.reducer
