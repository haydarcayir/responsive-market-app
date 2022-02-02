import { configureStore } from "@reduxjs/toolkit"

import createSagaMiddleware from "redux-saga"
import { watcherSaga } from "./sagas/rootSaga"
import itemReducer from "./ducks/itemSlice"
import companyReducer from "./ducks/companySlice"
import appReducer from "./ducks/appSlice"
import basketReducer from "./ducks/basketSlice"

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    items: itemReducer,
    companies: companyReducer,
    app: appReducer,
    basket: basketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})
sagaMiddleware.run(watcherSaga)

export default store
