import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/homePage/Banner';
import macImg from '../assets/images/macImg.png';
import demoImg from '../assets/images/product_demo_video.png';

export default props => (
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
              <li><Link onClick={ props.onToggleMenu } to="/sandbox" className="button bg-white">TRY NOW</Link></li>
            </ul>
          </div>
        </div>
        <div className="inner img-inner">
          <img src={ macImg } alt="" />
        </div>
      </div>

    </Banner>

    <div id="main">
      <section id="product-section">
        <div className="inner">
          <div className="frame" id="product">
            <div className="float-div">
              <header>
                <h2 className="color-highlight">Product <span className="color-fg thin">Demo</span></h2>
              </header>
              <div className="content">
                <span className="font-merriweather-Light block smaller">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula nulla, condimentum vitae nibh sed, faucibus malesuada nulla. Phasellus maximus tortor ut pharetra commodo. Fusce hendrerit leo vel arcu feugiat, nec dapibus velit ornare. Phasellus nec orci in sapien porta vulputate. Maecenas commodo, ex et porta lobortis, neque ligula lobortis sem, a viverra mauris felis vitae quam. In semper vehicula</span>
                <ul className="actions">
                  <li><Link onClick={ props.onToggleMenu } to="/sandbox" className="button bg-white">TRY NOW</Link></li>
                </ul>
              </div>
            </div>

          </div>
          <div className="frame" id="demo">
            <span className="rotateText">DEMONSTRATION</span>
            <img src={ demoImg } alt="" />
          </div>

        </div>
      </section>
      <section id="two" />
    </div>

  </Layout>

);
