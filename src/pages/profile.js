import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { navActiveActions } from '../store';

const Profile = () => {
    let navigate = useNavigate();
    let { username } = useParams();
    let dispatch = useDispatch();

    useEffect(()=>{
      dispatch(navActiveActions.setActivePage('profile'))
    }, [])

    const navigateToAboutPage = () => {
        navigate("/about");
      }
    
    const headerText = <h2 className={`page-title`}> This is the profile page {username} </h2>;

  return (
    <div>
        
        { 1==1 ? headerText : ''}
        
        <button 
            onClick={navigateToAboutPage}
        > 
            { " " } change to about page
        </button>
    </div>
  );
}

export default Profile;