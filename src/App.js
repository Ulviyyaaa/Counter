
import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import CounterControler from './Components/CounterControler';

function App() {
  const [count, setCount] =useState(0)
  return (
    <div className="App">
      <Counter count={count}/>
      <CounterControler data={[count, setCount]}/>
    </div>
  );
}

export default App;
