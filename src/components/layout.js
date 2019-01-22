import React from 'react';
import '../assets/scss/main.scss';
import Header from './Header';
import Menu from './Menu';
// import Contact from './Contact';
// import Footer from './Footer';

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
    const { children } = this.props;
    return (
      <div className={ `body ${ this.state.loading } ${ this.state.isMenuVisible ? 'is-menu-visible' : '' }` }>
        <div id="wrapper">
          <Header onToggleMenu={ this.handleToggleMenu } />
          {children}
          {/* <Contact /> */}
          {/* <Footer /> */}
        </div>
        <Menu onToggleMenu={ this.handleToggleMenu } getRef={ this.setWrapperRef } isSandboxMenushow={ false } />
      </div>
    );
  }
}

export default Layout;
