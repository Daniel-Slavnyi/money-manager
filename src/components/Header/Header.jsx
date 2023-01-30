import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/auth-operation';

const Header = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <header>
      <Link to="/">Wallet</Link>
      <button type="button" onClick={handleClick}>
        Exit on
      </button>
    </header>
  );
};
export default Header;

//Натискання на "Вийти" змінює прапорець у redux store:
//global.isModalLogoutOpen на true і повинні відкриватися модалка на вихід
