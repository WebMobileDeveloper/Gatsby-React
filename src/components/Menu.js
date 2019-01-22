import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Menu = props => (
  <nav id="menu" ref={ props.getRef }>
    <div className="inner">
      <ul className="links">
        <li><Link onClick={ props.onToggleMenu } to="/">Home</Link></li>
        <li><Link onClick={ props.onToggleMenu } to="/tech">Technology</Link></li>
        <li><Link onClick={ props.onToggleMenu } to="/solution">Solutions</Link></li>
        <li><Link onClick={ props.onToggleMenu } to="/pricing">Pricing</Link></li>
        <li><Link onClick={ props.onToggleMenu } to="/about">About</Link></li>
        <li><Link onClick={ props.onToggleMenu } to="/resources">Resources</Link></li>
        {props.isSandboxMenushow ? <li><Link onClick={ props.onToggleMenu } to="/sandbox">Sandbox</Link></li> : null}
      </ul>
    </div>
    {/* <a className="close" onClick={ props.onToggleMenu } href="javascript:;">Close</a> */}
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Menu;
