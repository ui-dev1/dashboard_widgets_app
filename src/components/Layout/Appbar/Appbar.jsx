import React from 'react';
import { Link } from 'react-router-dom';
import './appbar.scss';
import { useDispatch } from 'react-redux';
import { isAuthenticated } from '../../../redux/actions/userActions';

const Appbar = (props) => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(isAuthenticated(false));
  return (
    <header className='header flex-div'>
      <Link to='/login' onClick={handleLogout} className='link'>
        Logout
      </Link>
    </header>
  );
};

export default Appbar;
