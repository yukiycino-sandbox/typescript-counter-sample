import React, { useState } from "react"
import { Dispatch } from "redux"
import { connect } from "react-redux"

import { increment, decrement, calc } from "../modules/Counter"
import { AppState } from "../store"

type OwnProps = {}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const Counter: React.FC<Props> = (props: Props) => {
  const [calcNum, setNum] = useState("0")
  return (
    <div>
      <p>
        <span>{`count: ${props.count}`}</span>
      </p>
      <div>
        <a onClick={() => props.onIncrement()}>+1</a>
        <a onClick={() => props.onDecrement()}>-1</a>
      </div>
      <div>
        <input type="text" value={calcNum} onChange={e => setNum(e.target.value)} />
        <a onClick={() => props.onCalc(parseInt(calcNum, 10))}>Add</a>
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  ...state.counter
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onIncrement() {
    dispatch(increment())
  },
  onDecrement() {
    dispatch(decrement())
  },
  onCalc(value: number) {
    dispatch(calc({ value }))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
