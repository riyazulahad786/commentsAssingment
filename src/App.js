import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { incriment,decriment } from './action';
import Comment from './components/Comment';

function App() {
  const count = useSelector((state)=>state.count)
  const dispatch = useDispatch();
  return (
    <div className="App">
    <Comment/>
      {/* <Navbar/>
      <h1>counter app using redux</h1>
      {count}
      <div className='d-flex justify-content-around'>
        <button onClick={()=>dispatch(decriment())}>decrement</button>
        <button onClick={()=>dispatch(incriment())}>incriment</button>
      </div> */}
    </div>
  );
}

export default App;
