import { configureStore } from "@reduxjs/toolkit"

import createSagaMiddleware from "redux-saga"
import { watcherSaga } from "./sagas/rootSaga"
import itemReducer from "./ducks/itemSlice"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: { items: itemReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})
sagaMiddleware.run(watcherSaga)

export default store
