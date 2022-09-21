import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement,increment } from '../app/slice/CounterSlice'
import { change } from '../app/slice/InputSlice';

export default function Testing() {

    const count = useSelector((state)=>state.counter.value);
    const inputVal = useSelector((state)=>state.input.val)
    const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <h1>{inputVal}</h1>
      <input type="text" onChange={(e)=>(dispatch({val : e.target.value}))}/>
    </div>
  )
}
