import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
        <button
        
        >
            Increment
        </button>
        <br/>
        <br/>
        <div>{count}</div>

        <br/>
        <br/>
        <button>
            Decrement
        </button>
    </div>
  )
}

export default Counter