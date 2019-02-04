import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import OverflowWrapper from '../components/OverflowWrapper';
import historyImg from '../assets/images/history.jpg';
import cultureImg from '../assets/images/culture.jpg';
import careersImg from '../assets/images/careers.jpg';

export default class About extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    return (
      <Layout>
        <Banner bannerClass="banner-about" showScrollSection>
          <div className="banner-content">
            <div className="center-middle-div">
              <h1>About Us</h1>
              <h2>What we are all about and what we stand for.</h2>
            </div>
          </div>
        </Banner>

        <div id="main-about" className="main-div">
          <section id="history">
            <div className="img-div">
              <img src={ historyImg } alt="" />
            </div>
            <div className="content-div right">
              <div className="center-middle-div">
                <h1 className="title"><span className="color-fg">Our</span> History</h1>
                <OverflowWrapper>
                  <p className="content color-fg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel malesuada erat, sit amet imperdiet ex. Mauris porta vulputate fringilla.Donec accumsan tempus ligula, consectetur euismod tellus vestibulum ac. Vestibulum massa sem, efficitur eget sem id, placerat pharetra tortor. Duis pulvinar in sapien in sodales. Fusce posuere erat in nisl pulvinar, sed ornare ligula mattis. Aliquam erat volutpat. Aliquam in urna sit amet lorem congue congue. Pellentesque habitantmorbi tristique senectus et netus et malesuada fames</p>
                </OverflowWrapper>
              </div>
            </div>
          </section>

          <section id="culture">
            <div className="content-div left">
              <div className="center-middle-div">
                <h1 className="title"><span className="color-fg">Our</span> Culture</h1>
                <OverflowWrapper>
                  <p className="content color-fg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel malesuada erat, sit amet imperdiet ex. Mauris porta vulputate fringilla.Donec accumsan tempus ligula, consectetur euismod tellus vestibulum ac. Vestibulum massa sem, efficitur eget sem id, placerat pharetra tortor. Duis pulvinar in sapien in sodales. Fusce posuere erat in nisl pulvinar, sed ornare ligula mattis. Aliquam erat volutpat. Aliquam in urna sit amet lorem congue congue. Pellentesque habitantmorbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eget elit a mauris pharetra venenatis
                  </p>
                </OverflowWrapper>
              </div>

            </div>
            <div className="img-div">
              <img src={ cultureImg } alt="" />
            </div>
          </section>

          <section id="careers">
            <div className="img-div">
              <img src={ careersImg } alt="" />
            </div>
            <div className="content-div right">

              <div className="center-middle-div">
                <h1 className="title"><span className="color-fg">Our</span> Careers</h1>
                <OverflowWrapper>
                  <p className="content color-fg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel malesuada erat, sit amet imperdiet ex. Mauris porta vulputate fringilla.Donec accumsan tempus ligula, consectetur euismod tellus vestibulum ac. Vestibulum massa sem, efficitur eget sem id, placerat pharetra tortor. Duis pulvinar in sapien in sodales. Fusce posuere erat in nisl pulvinar, sed ornare ligula mattis. Aliquam erat volutpat. Aliquam in urna sit amet lorem congue congue. Pellentesque habitantmorbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eget elit a mauris pharetra venenatis
                  </p>
                </OverflowWrapper>
                <Link onClick={ this.props.onToggleMenu } to="/career" className="button bg-white">FIND OUT MORE</Link>
              </div>

            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
