import React from 'react';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
// import Contact from './Contact';

class Layout extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {
      isMenuVisible: false,
      // loading: 'is-loading',
    };
    this.handleToggleMenu = this.handleToggleMenu.bind( this );
    this.handleClickOutside = this.handleClickOutside.bind( this );
    this.setWrapperRef = this.setWrapperRef.bind( this );
  }

  componentDidMount () {
    this.timeoutId = setTimeout( () => {
      this.setState( { loading: '' } );
    }, 100 );
    document.addEventListener( 'mousedown', this.handleClickOutside );
  }

  componentWillUnmount () {
    if ( this.timeoutId ) {
      clearTimeout( this.timeoutId );
    }
    document.removeEventListener( 'mousedown', this.handleClickOutside );
  }

  setWrapperRef ( node ) {
    this.wrapperRef = node;
  }

  handleToggleMenu () {
    this.setState( {
      isMenuVisible: !this.state.isMenuVisible,
    } );
  }

  handleClickOutside ( event ) {
    if ( this.wrapperRef && !this.wrapperRef.contains( event.target ) ) {
      this.setState( { isMenuVisible: false } );
    }
  }

  render () {
    const {
      children, hideFooter, hideSandboxMenu, hideContactUs,
    } = this.props;
    return (
      <div className={ `body ${ this.state.loading } ${ this.state.isMenuVisible ? 'is-menu-visible' : '' } ` }>
        <Helmet
          title="DATAVIS"
          meta={ [
            { name: 'description', content: 'datavis' },
            { name: 'keywords', content: 'datavis, gatsby' },
          ] }
        />
        <div id="wrapper">
          <Header onToggleMenu={ this.handleToggleMenu } />
          {children}
          {!hideFooter && <Footer />}
        </div>
        {!hideContactUs && <Link to="/contact" className="icon alt contact"><span className="label">Contact Us</span></Link>}
        <Menu onToggleMenu={ this.handleToggleMenu } getRef={ this.setWrapperRef } hideSandboxMenu={ hideSandboxMenu } />
      </div>
    );
  }
}

export default Layout;
