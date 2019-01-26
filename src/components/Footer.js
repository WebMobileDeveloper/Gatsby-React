import React from 'react';
import { Link } from 'gatsby';
import emailImg from '../assets/images/email.png';
import contactImg from '../assets/images/contact.png';

export default class Footer extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    return (
      <footer id="footer">
        <div className="inner">
          <div className="grid-wrapper">
            <div className="col-3">
              <h5 className="title">NAVIGATION</h5>
              <ul className="navigation">
                <li><Link onClick={ this.props.onToggleMenu } to="/tech">Technology</Link></li>
                <li><Link onClick={ this.props.onToggleMenu } to="/resources">Industry</Link></li>
                <li><Link onClick={ this.props.onToggleMenu } to="/solution">Solutions</Link></li>
                <li><Link onClick={ this.props.onToggleMenu } to="/pricing">Pricing</Link></li>
                <li><Link onClick={ this.props.onToggleMenu } to="/about">About</Link></li>
              </ul>
            </div>
            <div className="col-3">
              <h5 className="title">CONTACT</h5>
              <ul className="contact">
                <li>
                  <div className="frame">
                    <div className="left">
                      <img src={ contactImg } alt="" />
                    </div>
                    <div className="right">
                      <h5>VISIT US</h5>
                      <span className="content">201 Henderson Road, #04-09</span>
                      <span className="content">Apex @ Henderson</span>
                      <span className="content">Singapore 159545</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="frame">
                    <div className="left">
                      <img src={ emailImg } alt="" />
                    </div>
                    <div className="right">
                      <h5>EMAIL US</h5>
                      <span className="content">hello@datavis.sg</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-3" />
            <div className="col-3 link">
              <ul>
                <li>
                  <div>
                    <a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a>
                    <a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <div className="grid-wrapper">
              <div className="col-6">
                <ul className="reserved">
                  <li>All Rights are Reserved 2019</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>&copy; Made by DATAVIS</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </footer>
    );
  }
}
