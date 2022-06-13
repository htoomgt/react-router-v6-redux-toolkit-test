import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { navActiveActions } from '../store';

const PersonRegister = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(navActiveActions.setActivePage('person-register'));
  });

  let [firstName, setFirstName ] = useState('');
  let [lastName, setLastName ] = useState('');
  let [email, setEmail ] = useState('');
  let [loading, setLoading ] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const personRegister = { first_name : firstName, last_name : lastName, email : email };
    const jStrPersonRegister = JSON.stringify(personRegister);

    console.log(jStrPersonRegister);


    let resp = await fetch('http://localhost:4000/persons', {
      method : 'POST',
      headers : {
        'Accept' : 'application/json',      
        'Content-Type' : 'application/json'
      },
      body : jStrPersonRegister
    });

    console.log(resp);
    setLoading(false);


  }



  return (
    <div>
        <h2 className={`page-title`}> Person Register</h2>

        <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor=""> First Name </label>
          <input type="text" name="first_name" onChange={(e) => setFirstName(e.target.value)}/>
        </div>

        <div className='form-group'>
          <label htmlFor=""> Last Name </label>
          <input type="text" name="last_name" onChange={(e) => setLastName(e.target.value)}/>
        </div>

        <div className='form-group'>
          <label htmlFor=""> Email </label>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="form-group">
          <button type='submit' >
            {loading ? `It is loading ...` :  `Register`}
          </button>
        </div>
        </form>


    </div>
  )
}

export default PersonRegister;