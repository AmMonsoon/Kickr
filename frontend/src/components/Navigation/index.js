import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className='nav-container'>
      <li>
        <NavLink exact to='/'> 
          <img className='home-icon' src='../images/home-icon.png' alt='' />
        </NavLink>
      </li>
      <li>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  
  );
}

export default Navigation;