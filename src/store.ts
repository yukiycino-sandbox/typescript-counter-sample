import { createStore } from "redux"

import reducer from "./reducer"
import { CounterState } from "./modules/Counter"

export type AppState = {
  counter: CounterState
}

export default function configureStore(initialState = {}) {
  return createStore(reducer, initialState)
}
