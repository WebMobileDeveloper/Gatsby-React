import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';

import banner2Img from '../assets/images/banners/tech-right.jpg';
import playImg from '../assets/images/play.png';
import fuseIconImg from '../assets/images/fuse_icon.png';
import lightningIconImg from '../assets/images/lightning_icon.png';
import sunspotIconImg from '../assets/images/sunspot_icon.png';
import penumbraIconImg from '../assets/images/penumbra_icon.png';

export default class Tech extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    return (
      <Layout hideSandboxMenu>
        <Banner bannerClass="banner-tech" showScrollSection>
          <div className="banner-content">
            <div className="row">
              <div className="col-sm-6 left">
                <div className="header">
                  <p className="font-merriweather-Light single-line">the</p>
                  <p className="title single-line">DATAVIS</p>
                  <p className="font-merriweather-Light pull-right single-line">technology.</p>
                </div>
                <div className="content">
                  <p className="font-merriweather-Light block">
                    <span className="color-fg">Datavis</span> is a platform as a service(PaaS), providing a fully-managed, multi - tenated,
                  secure and higly available data analytics platform deployed on-cloud and on-premise.
                  </p>
                  <p className="font-merriweather-Light block">
                    <span className="color-fg">Datavis</span> is architected to be modular and scalable. Our technology core is based upon 4 modules:&emsp;
                    <span className="color-fg">Lightning, Fuse, Sunspot & Penumbra.</span>
                  </p>
                  <ul className="actions">
                    <li><a href="#one" className="button">LEARN MORE</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 right">
                <div className="imgFrame">
                  <img className="right-banner" src={ banner2Img } alt="" />
                  <img className="play" src={ playImg } alt="" />
                </div>
              </div>
            </div>
          </div>

        </Banner>
        <div id="main-tech" className="main-div">

          <section id="fuse">
            <div className="full-container">
              <div className="row">
                <div className="col-md-7 col-sm-6 col-5 fuseImg" />
                <div className="col-md-5 col-sm-6 col-7 description">
                  <div className="center-middle-div">
                    <header>
                      <img src={ fuseIconImg } alt="" />
                      <span className="color-fg title">&nbsp;Fuse</span>
                    </header>
                    <div className="content">
                      <p className="top">Connect, clean, prepare and pipe data easily.</p>
                      <p className="bottom">More than 60 Connectors</p>
                      <p className="bottom">Kafka for Real-time Big Data streaming</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section id="lightning">
            <div className="full-container">
              <div className="row">

                <div className="col-md-5 col-sm-6 col-7 description">
                  <div className="center-middle-div">
                    <header>
                      <img src={ lightningIconImg } alt="" />
                      <span className="color-fg title">&nbsp;Lightning</span>
                    </header>
                    <div className="content">
                      <p className="top">Fast, distributed and intelligent process automation.</p>
                      <p className="bottom">More than 100 transform actions</p>
                      <p className="bottom">AI and Algorithmic Models</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-6 col-5 lightningImg" />
              </div>
            </div>
          </section>

          <section id="sunspot">
            <div className="full-container">
              <div className="row">
                <div className="col-md-7 col-sm-6 col-5 sunspotImg" />
                <div className="col-md-5 col-sm-6 col-7 description">
                  <div className="center-middle-div">
                    <header>
                      <img src={ sunspotIconImg } alt="" />
                      <span className="color-fg title">&nbsp;Sunspot</span>
                    </header>
                    <div className="content">
                      <p className="top">Interactive AI generated focused reports; for your insights and actions.</p>
                      <p className="bottom">More than 100 visualization widgets</p>
                      <p className="bottom">Dynamic Rule-based Interactivity</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section id="penumbra">
            <div className="full-container">
              <div className="row">

                <div className="col-md-5 col-sm-6 col-7 description">
                  <div className="center-middle-div">
                    <header>
                      <img src={ penumbraIconImg } alt="" />
                      <span className="color-fg title">&nbsp;Penumbra</span>
                    </header>
                    <div className="content">
                      <p className="top">Trends, patterns and information; your data on a single interactive canvas.</p>
                      <p className="bottom">GPU-accelerated graphics rendering</p>
                      <p className="bottom">3D Geospatial visualization canvas</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-6 col-5 penumbraImg" />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
