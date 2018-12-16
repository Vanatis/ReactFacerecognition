import React from 'react';
import ProfileIcon from '../Profile/ProfileIcon';

import './Navigation.css';

const Navigation = ({ name, onRouteChange, isSignedIn, toggleModal }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p>{name}</p>
          <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='pointer'>Register</p>
        </nav>
      );
    }
}

export default Navigation;
