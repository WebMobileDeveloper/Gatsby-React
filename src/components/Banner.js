import React from 'react';
import { Link } from 'gatsby';
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
      children, showLinks, showScrollSection, headerOptions,
    } = this.props;
    const headerData = headerOptions || { linkTo: '' };
    return (
      <div id="banner" className={ liClasses }>
        <div className="banner-header">
          <Link to="/" className="logo hideOnMobile">&nbsp;</Link>
          <Link to={ headerData.linkTo } className="back-button">
            <h2>{headerData.main_title}</h2>
            {headerData.backButtonShow && <div className="back-image hideOnMobile" />}
          </Link>
        </div>
        {children}
        <div className="banner-bottom hideOnMobile">
          {showLinks && (
            <div className="right-frame">
              <a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a>
              <a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a>
            </div>
          )}
          {showScrollSection && (
            <div className="center-frame">
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
