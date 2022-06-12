import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { counterActions, navActiveActions } from '../store/index';


const Counter = () => {  
  const counterReduxState = useSelector((state) => state.counter);
  const dispatch = useDispatch()


  let increment = () => {
    
    dispatch(counterActions.increment());
    
  }

  let decrement = () => {    
    dispatch(counterActions.decrement());
  }

  useEffect(()=> {
    dispatch(navActiveActions.setActivePage('counter'));
  })
  

  return (
    <>
        <h2> Counter JS</h2>   

        <h3> Count : {counterReduxState.count}</h3> 
        <div>
            <button onClick={decrement}>Decrement</button> &nbsp;&nbsp;
            <button onClick={increment}>Increment</button>
        </div>
    </>
    
  );
}

export default Counter