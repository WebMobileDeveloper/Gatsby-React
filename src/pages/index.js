import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';
// import Stage from '../components/homePage/Stage';

import macImg from '../assets/images/macImg.png';
// import demoImg from '../assets/images/product_demo_video.jpg';
// import startButtonImg from '../assets/images/product_start.jpg';
// import stage1Img from '../assets/images/stage1.png';
// import stage2Img from '../assets/images/stage2.png';
// import stage3Img from '../assets/images/stage3.png';
// import stage4Img from '../assets/images/stage4.png';
// import penumImg from '../assets/images/penumbra.jpg';
// import quotationMarkImg from '../assets/images/quotation_mark.png';
// import dennisImg from '../assets/images/dennis.jpg';
// import netImg from '../assets/images/net.png';

export default class HomePage extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    // const stageContent = [ 'Your universe of data in high-definition visual clarity. From geospatial canvases to dynamic, our platform has been designed for the line of business user in mind. Discover how data visualization takes the stage on our platform.', 'Your universe of data in high-definition visual clarity. From geospatial canvases to dynamic, our platform has been designed for the line of business user in mind. Discover how data visualization takes the stage on our platform.', 'Silos, DBs, APIs, CSVs. ETLs, Feature Engineering. ML Models. Dashboards, Reports. Too many jargons. Find out how our Digital Architecture Platform streamlines messy data into a cohesive environment.', 'Transforming is not about replacing the old, but about bridging legacy systems with modern cutting edge tech. Read our White Paper on how Digital Architecture is critical in the enterprise implementation of data- driven initiatives.' ];
    return (
      <Layout>
        <Banner bannerClass="banner-1">
          <div className="banner-content content-1">
            <div className="row">
              <div className="col-sm-6 left">
                <div className="header">
                  <p className="font-merriweather-Light single-line">the</p>
                  <p className="title single-line">DATAVIS</p>
                  <p className="font-merriweather-Light pull-right single-line">platform.</p>
                </div>
                <div className="content">
                  <p className="font-merriweather-Light block">Streamline any data-drive process fast.</p>
                  <p className="font-merriweather-Light block">On one single Digital Architecture Platform.</p>
                  <ul className="actions">
                    <li><a href="#one" className="button">WATCH DEMO</a></li>
                    <li><Link onClick={ this.props.onToggleMenu } to="/sandbox" className="button bg-white hideOnMobile">TRY NOW</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 right">
                <img src={ macImg } alt="" />
              </div>
            </div>

            {/* <div className="inner">
              <header className="major">
                <p className="font-merriweather-Light">the</p>
                <h1 className="single-line">DATAVIS</h1>
                <p className="font-merriweather-Light pull-right">platform.</p>
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

        {/* <div id="main">
          <section id="product-section">
            <div className="inner">
              <div className="frame" id="product">
                <div className="float-div">
                  <header>
                    <h2 className="color-fg">Product <span className="color-white thin">Demo</span></h2>
                  </header>
                  <div className="content">
                    <span className="font-merriweather-Light block smaller">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula nulla, condimentum vitae nibh sed, faucibus malesuada nulla. Phasellus maximus tortor ut pharetra commodo. Fusce hendrerit leo vel arcu feugiat, nec dapibus velit ornare. Phasellus nec orci in sapien porta vulputate. Maecenas commodo, ex et porta lobortis, neque ligula lobortis sem, a viverra mauris felis vitae quam. In semper vehicula</span>
                    <ul className="actions">
                      <li><Link onClick={ this.props.onToggleMenu } to="/sandbox" className="button bg-white">TRY NOW</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="frame" id="demo">
                <span className="rotateText">DEMONSTRATION</span>
                <div className="img-div">
                  <img className="demo-video" src={ demoImg } alt="" />
                  <span className="title thin">Product demo Video</span>
                  <img className="start-button-img" src={ startButtonImg } alt="" />
                </div>
              </div>
            </div>
          </section>

          <section id="stage">
            <Stage onToggleMenu={ this.props.onToggleMenu } title="Solve" linkTo="/solution" stageImg={ stage1Img } content={ stageContent[ 0 ] } />
            <Stage onToggleMenu={ this.props.onToggleMenu } title="Explore" linkTo="/sandbox" stageImg={ stage2Img } content={ stageContent[ 1 ] } />
            <Stage onToggleMenu={ this.props.onToggleMenu } title="Unify" linkTo="/Tech" stageImg={ stage3Img } content={ stageContent[ 2 ] } />
            <Stage onToggleMenu={ this.props.onToggleMenu } title="Bridge" linkTo="/solution" stageImg={ stage4Img } content={ stageContent[ 3 ] } />
          </section>

          <section id="architects">
            <div className="inner">
              <div className="left-div">
                <div className="frame left-top">
                  <img src={ penumImg } alt="" />
                </div>

                <div className="frame left-bottom">
                  <div className="rect" />
                  <div className="title">Digital <span className="thin">Architects</span></div>
                  <div className="content font-merriweather-Light">We are <span>Digital Architects</span>, orchestrating your increasingly complex data ecosystem. We craft data pipelines, and develop business and industry intelligence tools that aid industry experts and professionals make sound business decisions.</div>
                  <Link onClick={ this.props.onToggleMenu } to="/about" className="button color-fg">FIND OUT MORE</Link>
                </div>
              </div>
              <div className="frame right-div">
                <div className="top">04</div>
                <div className="line" />
                <div className="bottom">05</div>
              </div>
            </div>
          </section>

          <section id="rewardTeller">
            <div className="left">
              <div className="frame">
                <span className="top"><img src={ quotationMarkImg } alt="" /></span>
                <span className="center font-merriweather-Light">People ignore design that ignore people.</span>
                <span className="bottom">— EDWARD TELLER</span>
              </div>
            </div>
            <img className="backImg" src={ dennisImg } alt="" />
          </section>

          <section id="details">
            <div className="inner">
              <div className="center-div">
                <h2>How is Datavis <span>different?</span></h2>
                <div className="hr-div" />
                <div className="content font-merriweather-Light">The data analytics landscape is cluttered with a myriad of business intelligence tools and industry juggernauts. Datavis solutions aim to cut through the noise by providing plug and play simple to use tools that allows one to seamlessly craft data pipelines, process surmountable amount of data via editors, and plot given data onto elegant solutions and dynamic visualization charts.</div>
              </div>
              <div className="line-div">
                <div className="top">06</div>
                <div className="line" />
                <div className="bottom">07</div>
              </div>
            </div>
            <div className="inner bottom">
              <div className="item">
                <img src={ stage1Img } alt="" />
                <div className="title">AGILITY</div>
                <div className="content font-merriweather-Light ">Modularity in Architecture Abstracting from infrastructure Objective-driven solution building</div>
              </div>
              <div className="item">
                <img src={ stage2Img } alt="" />
                <div className="title">DEPTH</div>
                <div className="content font-merriweather-Light ">Large growing asset libraries Support for all major protocols Future proof for scale</div>
              </div>
              <div className="item">
                <img src={ stage3Img } alt="" />
                <div className="title">LOW-CODE</div>
                <div className="content font-merriweather-Light ">Visual first interface Time to market Improved LOB/Dev Dynamics</div>
              </div>
            </div>
          </section>

          <section id="submit">
            <div className="float">
              <div className="title"><span className="color-fg">Connect</span> your data, application, ideas & people.</div>
              <div className="line" />
              <div className="wraper-container">
                <div className="grid-wrapper">
                  <div className="col-6" />
                </div>
              </div>
              <form method="post" action="#">
                <div className="grid-wrapper">
                  <div className="col-12">
                    <div className="mb-2"><input type="text" name="name" id="name" defaultValue="" placeholder="Name" /></div>
                  </div>
                  <div className="col-6">
                    <div className="mb-2"><input type="email" name="email" id="email" defaultValue="" placeholder="Work email" /></div>
                  </div>
                  <div className="col-6">
                    <div className="mb-4"><input type="text" name="phone" id="phone" defaultValue="" placeholder="Phone number" /></div>
                  </div>
                  <div className="col-12">
                    <input type="submit" value="SUBMIT" className="button bg-fg no-transform round-more bold mt-0" />
                  </div>
                </div>
              </form>
              <img className="netImg" src={ netImg } alt="" />
            </div>

          </section>

        </div>
      */}
      </Layout>
    );
  }
}
