import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';

import banner2Img from '../assets/images/banner2_1.jpg';
import playImg from '../assets/images/play.png';
// import pic09 from '../assets/images/pic09.jpg';
// import pic10 from '../assets/images/pic10.jpg';
export default class Tech extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    return (
      <Layout>
        <Banner bannerClass="banner2">
          <div className="banner-content">
            <div className="left">
              <header className="major">
                <span className="font-merriweather-Light">the</span>
                <h1 className="single-line">DATAVIS</h1>
                <span className="font-merriweather-Light pull-right">technology.</span>
              </header>
              <div className="content font-merriweather-Light block">
                <p>
                  <span className="color-fg">Datavis</span> is a platform as a service(PaaS), providing a fully-managed, multi - tenated,
                secure and higly available data analytics platform deployed on-cloud and on-premise.
                </p>
                <p>
                  <span className="color-fg">Datavis</span> is architected to be modular and scalable. Our technology core is based upon 4 modules:&emsp;
                  <span className="color-fg">Lightning, Fuse, Sunspot & Penumbra.</span>
                </p>
              </div>
              <ul className="actions">
                <li><a className="button rounded" href="#one">LEARN MORE</a></li>
              </ul>
            </div>
            <div className="right">
              <div className="imgFrame">
                <img className="right-banner" src={ banner2Img } alt="" />
                <img className="play" src={ playImg } alt="" />
              </div>
            </div>
            {/* <div className="inner">
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
                  <li><Link onClick={ this.props.onToggleMenu } to="/sandbox" className="button bg-white">TRY NOW</Link></li>
                </ul>
              </div>
            </div>
            <div className="inner img-inner">
              <img src={ macImg } alt="" />
            </div> */}
          </div>

        </Banner>
        <div id="main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">SKILL</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>

                <button type="button" className="btn btn-link">Link</button>
              </div>
              <div className="col-lg-3 col-6">
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>

                <button type="button" className="btn btn-link">Link</button>
              </div>
              <div className="col-lg-3 col-6">
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>

                <button type="button" className="btn btn-link">Link</button>
              </div>
              <div className="col-lg-3 col-6">
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>

                <button type="button" className="btn btn-link">Link</button>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>

                <button type="button" className="btn btn-link">Link</button>
              </div>
              <div className="col-lg-3 col-6 ">
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>

                <button type="button" className="btn btn-link">Link</button>
              </div>
              <div className="col-lg-3 col-6 ">
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>

                <button type="button" className="btn btn-link">Link</button>
              </div>
              <div className="col-lg-3 col-6 ">
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>

                <button type="button" className="btn btn-link">Link</button>
              </div>
            </div>
          </div>
          {/* <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Sed amet aliquam</h2>
          </header>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={ pic08 } alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Orci maecenas</h3>
              </header>
              <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn more</Link></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={ pic09 } alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Rhoncus magna</h3>
              </header>
              <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn more</Link></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={ pic10 } alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Sed nunc ligula</h3>
              </header>
              <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn more</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    */}
        </div>

      </Layout>
    );
  }
}
