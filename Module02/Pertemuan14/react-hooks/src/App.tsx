import {Component1} from './components/Mycomponents'
import Big from './components/Big'
import {useEffect, useRef, useState} from 'react'
import './App.css'
import useCounter from './hooks/useCounter'

function App() {

  const [name, setName] = useState('')
  const {count, increment, decrement} = useCounter(10, 5)

  const ref = useRef({
    foo:"bar",
    count:42
  })

  const handleGetValue = () => {
    alert(JSON.stringify(ref.current))
  }

  useEffect(()=> {
    console.log('useEffect triggered')
  }, [count])

  return (
    <>
    <button onClick={handleGetValue}> get Ref </button>
    <h1>Hello, {name}</h1>
    <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
    <br></br>
    <br></br>
    <button onClick={() => decrement()}> - </button>
    <button onClick={() => increment()}> + </button>
    <h2>count: {count}</h2>
    <Big />
    <Component1 />
    </>
  )
}

export default App
