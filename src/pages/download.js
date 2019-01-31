import React from 'react';
import { Link } from 'gatsby';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

import Layout from '../components/layout';
import Banner from '../components/Banner';

export default class Download extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind( this );
    this.onSubmit = this.onSubmit.bind( this );
  }

  onSubmit ( event ) {
    event.preventDefault();
    this.toggle();
  }

  toggle () {
    this.setState( {
      modal: !this.state.modal,
    } );
  }

  render () {
    console.log( this.state );
    return (
      <Layout>
        <Banner bannerClass="banner-download">
          <div className="banner-content">
            <div className="center-middle-div">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-sm-12 header-container blue">
                    <div className="header">
                      <p className="title">White <span className="color-fg">Paper.</span></p>
                      <div className="line" />
                      <p className="content thin">Need Datavis white paper? &emsp;We have tons of it due to printing mistakes.</p>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12 form-container red">
                    <form method="post" action="#" className="thin" onSubmit={ this.onSubmit }>
                      <div className="col-12 title">
                        <h3>Get a <span className="color-fg">Copy.</span></h3>
                        <div className="line" />
                      </div>
                      <div className="col-12">
                        <input type="text" name="name" id="name" defaultValue="" placeholder="Name" />
                      </div>
                      <div className="col-12">
                        <input type="text" name="company" id="company" defaultValue="" placeholder="Company" />
                      </div>
                      <div className="col-12">
                        <input type="email" name="email" id="email" defaultValue="" placeholder="Work email" />
                      </div>
                      <div className="col-12">
                        <input type="text" name="phone" id="phone" defaultValue="" placeholder="Phone number" />
                      </div>
                      <div className="col-12">
                        <input type="submit" value="DOWNLOAD" className="button bg-fg no-transform bold mt-0" />
                      </div>
                      <div className="col-12 privacy">By submitting this form, I agree to Datavis's privacy policy and terms of service.</div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className } centered backdrop="static">
              {/* <ModalHeader toggle={ this.toggle }>Modal title</ModalHeader> */}
              <ModalBody>
                <div className="row content-row">
                  <div className="col-sm-3 col-2 check-img" />
                  <div className="col-sm-9 col-10 content">
                    <h3>Thank you for downloading.</h3>
                    <h3>Please wait as your white paper is downloaded</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h3>For any query contact feel free to contact us</h3>
                  </div>
                </div>
                <div className="row button-row">
                  <div className="col-12">
                    <Link to="/contact" className="button bg-fg no-transform bold">Contact Us</Link>
                    <a href="#" onClick={ this.toggle } className="button bg-fg no-transform bold">Continue</a>
                  </div>
                </div>
              </ModalBody>
            </Modal>
          </div>
        </Banner>
      </Layout>
    );
  }
}
