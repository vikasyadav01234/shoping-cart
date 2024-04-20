import React from 'react'

const Counter = () => {
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