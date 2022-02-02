import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { TCompany } from "libs/models/company-model"

export type TSliceState =
  | { state: "loading"; data: TCompany[] }
  | { state: "finished"; data: TCompany[] }
  | {
      loading: boolean
      error: boolean
      contractsData?: []
    }

const companySlice = createSlice({
  name: "companies",
  initialState: { state: "loading", data: [] } as TSliceState,
  reducers: {
    getCompanies() {},
    setCompanies(state, action: PayloadAction<TCompany[]>) {
      return {
        state: "finished",
        data: [...action.payload],
      }
    },
  },
})

export const { getCompanies, setCompanies } = companySlice.actions

export default companySlice.reducer
