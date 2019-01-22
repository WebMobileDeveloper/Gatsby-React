import React from 'react';
import { Link } from 'gatsby';

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
      <section id="banner" className={ liClasses }>
        {children}
        <div className="banner-bottom">
          <a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a>
          <a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a>
          <Link className="icon alt contact" to="/contact"><span className="label">Contact Us</span></Link>
        </div>
      </section>
    );
  }
}

export default Banner;
