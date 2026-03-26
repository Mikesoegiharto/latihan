import './App.css'
import useCounter from '../components/Hook/UseCounter/UseCounter'

function App() {
  const [count, increment, decrement] = useCounter(5, 10);
 
  return (
    <>
      <div className='App'>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </>
  );
}

export default App
