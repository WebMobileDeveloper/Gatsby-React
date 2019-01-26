import React from 'react';
import { Link } from 'gatsby';
import menuImg from '../assets/images/menubar.png';
import logoImg from '../assets/images/logo.png';

class Header extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {
    };
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <header id="header" className="alt">
        <nav>
          <a className="menu-link rotateText" onClick={ this.props.onToggleMenu } href="javascript:;">
            <span className="hideOnMobile">Menu</span>
            <img src={ menuImg } alt="" className="hover-image hideOnMobile" />
          </a>
        </nav>
        <Link to="/" className="logo hideOnScreen"><img src={ logoImg } alt="" className="hover-image" /></Link>
        <Link onClick={ this.props.onToggleMenu } to="/sandbox" className="button bg-white hideOnScreen btn-try">TRY NOW</Link>
      </header>
    );
  }
}

export default Header;
