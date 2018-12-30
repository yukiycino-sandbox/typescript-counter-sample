import React from "react"
import { hot } from "react-hot-loader"
import { Provider } from "react-redux"

import configureStore from "./store"

import Counter from "./components/Counter"

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default hot(module)(App)
