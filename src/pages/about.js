import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { navActiveActions } from '../store';

const About = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(navActiveActions.setActivePage('about'));
  })
  

  return (
    <div>
        <h2> This is about page!</h2>
    </div>
  )
}

export default About