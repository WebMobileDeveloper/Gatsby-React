import React from 'react';
import { Link } from 'gatsby';
import mouseImg from '../../assets/images/mouse.png';

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
    const { children } = this.props;
    return (
      <div id="banner" className={ liClasses }>
        {children}
        <div className="banner-bottom">
          <div className="right-frame">
            <a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a>
            <a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a>
            <Link className="icon alt contact" to="/contact"><span className="label">Contact Us</span></Link>
          </div>
          <div className="center-frame">
            <span className="font-merriweather-Light">Scroll to explore</span>
            <img src={ mouseImg } alt="" />
          </div>

        </div>
      </div>
    );
  }
}

export default Banner;
