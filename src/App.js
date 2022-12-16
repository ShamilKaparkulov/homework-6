import { useState } from 'react';
import './App.css';
import Count from './components/Count';

function App() {
  const [count, setCount] = useState(0)
  console.log(count);

  const onIncrease = () => {
    setCount(count +1)
  }
  const onDecrease = () => {
    setCount(count -1)
  }
  const minus = () => {
    if(count > 5){
    setCount(count - 5)
    }
  }
  return (
    <div className="App">
      <Count count={count}/>
     <button onClick={onIncrease}>increase</button>
     <button onClick={onDecrease} disabled={count === 0}>decrease</button>
     <button onClick={minus}>-5</button>
    </div>
  );
}

export default App;
