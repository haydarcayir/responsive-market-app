import { call, put } from "redux-saga/effects"
import { setItems } from "../../ducks/itemSlice"
import { requestGetItems } from "../requests/item"
import { TResponseBaseModel } from "libs/models/response-base-model"
import { TItem } from "libs/models/item-model"

type TData = {
  data: TItem[]
}

export function* handleGetItems(action: any) {
  const { itemType } = action.payload

  try {
    const { data }: TResponseBaseModel<TData> = yield call(
      requestGetItems,
      itemType
    )
    yield put(setItems(data))
  } catch (error) {
    console.log(error)
  }
}
