import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { navActiveActions } from '../store';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(navActiveActions.setActivePage('home'));
  })

  

  return (
    <div>
        <h2 className={`page-title`}> This is home page!</h2>
    </div>
  );
}

export default Home;
