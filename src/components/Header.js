import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import logoImg from '../assets/images/logo.png';
import menuImg from '../assets/images/menubar.png';

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo"><img src={ logoImg } alt="" className="hover-image" /></Link>
    <nav>
      <a className="menu-link rotateText" onClick={ props.onToggleMenu } href="javascript:;">
        Menu
        <img src={ menuImg } alt="" className="hover-image" />
      </a>
    </nav>
  </header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Header;
