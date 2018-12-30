import { combineReducers } from "redux"

import { AppState } from "./store"
import { counterReducer } from "./modules/Counter"

export default combineReducers<AppState>({
  counter: counterReducer
})
