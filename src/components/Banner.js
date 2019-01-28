import React from 'react';
import { Link } from 'gatsby';
import logoImg from '../assets/images/logo.png';
import mouseImg from '../assets/images/mouse.png';

class Banner extends React.Component {
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
    const liClasses = `major ${ this.props.bannerClass }`;
    const {
      children, showLinkedIn, showInstagram, showContactUs, showScrollSection,
    } = this.props;
    return (
      <div id="banner" className={ liClasses }>
        <Link to="/" className="logo hideOnMobile"><img src={ logoImg } alt="" className="hover-image" /></Link>
        {children}
        <div className="banner-bottom">
          <div className="right-frame">
            {showLinkedIn && <a href="#" className="icon alt fa-linkedin hideOnMobile"><span className="label">LinkedIn</span></a>}
            {showInstagram && <a href="#" className="icon alt fa-instagram hideOnMobile"><span className="label">Instagram</span></a>}
            {showContactUs && <Link to="/contact" className="icon alt contact"><span className="label">Contact Us</span></Link>}
          </div>
          {showScrollSection && (
            <div className="center-frame hideOnMobile">
              <span className="font-merriweather-Light">Scroll to explore</span>
              <img src={ mouseImg } alt="" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Banner;
