import { Reducer } from "redux"

export type CounterState = { count: number }

export const initialState: CounterState = {
  count: 0
}

type Action = ReturnType<typeof increment | typeof decrement | typeof calc>

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const CALC = "CALC"

export const increment = () => ({
  type: INCREMENT as typeof INCREMENT
})

export const decrement = () => ({
  type: DECREMENT as typeof DECREMENT
})

export const calc = (payload: CalcPayload) => ({
  type: CALC as typeof CALC,
  payload
})

type CalcPayload = {
  value: number
}

export const counterReducer: Reducer<CounterState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1
      }
    }
    case CALC: {
      return {
        ...state,
        count: state.count + action.payload.value
      }
    }
    default: {
      const _: never = action
      return state
    }
  }
}
