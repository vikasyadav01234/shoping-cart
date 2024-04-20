import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/Slices/CounterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
        <button
        onClick={() => dispatch(increment())}
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