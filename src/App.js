import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { decreament, increament, test } from './redux/CounterSlice';

function App() {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>The Count is: {count}</h1>
      <button onClick={() => dispatch(decreament())}>Decrease</button>
      <button onClick={() => dispatch(increament())}>Increase</button>
      <button onClick={() => dispatch(test({ value: 50 }))}>Test</button>
    </div>
  );
}

export default App;
