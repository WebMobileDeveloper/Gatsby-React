import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/homePage/Banner';
import macImg from '../assets/images/macImg.png';
// import menuImg from '../assets/images/menubar.png';

export default () => (
  <Layout>
    <Helmet
      title="DATAVIS"
      meta={ [
        { name: 'description', content: 'datavis' },
        { name: 'keywords', content: 'datavis, gatsby' },
      ] }
    />

    <Banner bannerClass="banner1">
      <div className="banner-content">
        <div className="inner">
          <header className="major">
            <span className="font-merriweather-Light">the</span>
            <h1 className="single-line">DATAVIS</h1>
            <span className="font-merriweather-Light pull-right">platform.</span>
          </header>
          <div className="content">
            <span className="font-merriweather-Light block">Streamline any data-drive process fast.</span>
            <span className="font-merriweather-Light block">On one single Digital Architecture Platform.</span>
            <ul className="actions">
              <li><a href="#one" className="button">WATCH DEMO</a></li>
              <li><a href="#one" className="button bg-white">TRY NOW</a></li>
            </ul>
          </div>
        </div>
        <div className="inner img-inner">
          <img src={ macImg } alt="" />
        </div>
      </div>

    </Banner>

    <div id="main">
      <section id="one" />
      <section id="two" />
    </div>

  </Layout>

);
