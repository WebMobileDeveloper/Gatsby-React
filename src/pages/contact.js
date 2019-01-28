import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';

import emailImg from '../assets/images/email.png';
import contactImg from '../assets/images/contact.png';
import datavisMapImg from '../assets/images/datavisMap.jpg';

export default class Tech extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    return (
      <Layout>
        <Banner bannerClass="banner-3">
          <div className="banner-content content-3">
            <div className="row">

              <div className="col-sm-6 left">
                <div className="header">
                  {/* <p className="font-merriweather-Light single-line">the</p> */}
                  <p className="title single-line"><span className="color-fg">Contact</span>&nbsp;Us.</p>
                  <div className="line" />
                </div>

                <div className="content">
                  <p className="font-merriweather-Light block">
                    <span className="color-fg">Reach</span> out to us, we will be happy to have a cup of coffee with you.
                  </p>
                </div>

                <div className="info hideOnMobile">
                  <img className="backImage" src={ datavisMapImg } alt="" />
                  <div className="contact-bottom">

                    <div className="frame first">
                      <div className="left-div">
                        <img src={ contactImg } alt="" className="center-middle-div" />
                      </div>
                      <div className="right-div">
                        <h6>VISIT US</h6>
                        <p className="content">201 Henderson Road, #04-09</p>
                        <p className="content">Apex @ Henderson, Singapore 159545</p>
                      </div>
                    </div>

                    <div className="frame second">
                      <div className="left-div">
                        <img src={ emailImg } alt="" className="center-middle-div" />
                      </div>
                      <div className="right-div">
                        <h6>EMAIL US</h6>
                        <p className="content">hello@datavis.sg</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className="col-sm-6 right">
                <form method="post" action="#">
                  <div className="grid-wrapper">
                    <div className="col-12 title">
                      <h2>Send us a <span className="color-fg">message.</span></h2>
                      <div className="line" />
                    </div>
                    <div className="col-12">
                      <div className="mb-2"><input type="text" name="name" id="name" defaultValue="" placeholder="Name" /></div>
                    </div>
                    <div className="col-12">
                      <div className="mb-2"><input type="text" name="company" id="company" defaultValue="" placeholder="Company" /></div>
                    </div>
                    <div className="col-12">
                      <div className="mb-2"><input type="email" name="email" id="email" defaultValue="" placeholder="Work email" /></div>
                    </div>
                    <div className="col-12">
                      <div className="mb-2"><input type="text" name="phone" id="phone" defaultValue="" placeholder="Phone number" /></div>
                    </div>
                    <div className="col-12">
                      <div className="mb-5"><textarea type="text" name="note" id="note" defaultValue="" placeholder="How may we help you?" /></div>
                    </div>
                    <div className="col-12">
                      <input type="submit" value="SUBMIT" className="button bg-fg no-transform round-more bold mt-0" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Banner>
        <div id="main-contact" className="main-div">
          <section id="info-section" className="hideOnScreen">
            <img className="backImage" src={ datavisMapImg } alt="" />
            <div className="contact-bottom">
              <div className="frame first">
                <div className="left-div">
                  <img src={ contactImg } alt="" className="center-middle-div" />
                </div>
                <div className="right-div">
                  <h6>VISIT US</h6>
                  <p className="content">201 Henderson Road, #04-09</p>
                  <p className="content">Apex @ Henderson, Singapore 159545</p>
                </div>
              </div>
              <div className="frame second">
                <div className="left-div">
                  <img src={ emailImg } alt="" className="center-middle-div" />
                </div>
                <div className="right-div">
                  <h6>EMAIL US</h6>
                  <p className="content">hello@datavis.sg</p>
                </div>
              </div>
            </div>
          </section>
        </div>

      </Layout>
    );
  }
}
