import React from 'react';
import logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
    </header>
  );
};

export default Header;