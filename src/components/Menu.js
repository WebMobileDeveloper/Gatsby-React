import React from 'react';
import { Link } from 'gatsby';

export default class Menu extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    return (
      <nav id="menu" ref={ this.props.getRef }>
        <div className="inner">
          <ul className="links">
            <li><a href="#one" className="button hideOnScreen">WATCH DEMO</a></li>
            <li><Link onClick={ this.props.onToggleMenu } to="/sandbox" className="button bg-white hideOnScreen">TRY NOW</Link></li>
            <li><Link onClick={ this.props.onToggleMenu } to="/">Home</Link></li>
            <li><Link onClick={ this.props.onToggleMenu } to="/tech">Technology</Link></li>
            <li><Link onClick={ this.props.onToggleMenu } to="/solution">Solutions</Link></li>
            <li><Link onClick={ this.props.onToggleMenu } to="/pricing">Pricing</Link></li>
            <li><Link onClick={ this.props.onToggleMenu } to="/about">About</Link></li>
            <li><Link onClick={ this.props.onToggleMenu } to="/resources">Resources</Link></li>
            {!this.props.hideSandboxMenu && <li><Link onClick={ this.props.onToggleMenu } to="/sandbox">Sandbox</Link></li>}
          </ul>
        </div>
        <a className="close hideOnScreen" onClick={ this.props.onToggleMenu } href="javascript:;">Close</a>
      </nav>
    );
  }
}
