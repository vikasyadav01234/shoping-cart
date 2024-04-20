import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state.counter)


  return (
    <div>
        <button>
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