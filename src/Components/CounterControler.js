import React from 'react'

function CounterControler({data}) {
    const [count, setCount] =data
    function increse(){
        setCount(count+1)
    }
    function decrese(){
        setCount(count-1)
    }
  return (
    <div>
        <button onClick={increse}>+</button>
        <button onClick={decrese}>-</button>
    </div>
  )
}

export default CounterControler