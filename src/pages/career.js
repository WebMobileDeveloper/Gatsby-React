import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import OverflowWrapper from '../components/OverflowWrapper';
import historyImg from '../assets/images/history.jpg';
import cultureImg from '../assets/images/culture.jpg';
import careersImg from '../assets/images/careers.jpg';

export default class Career extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    return (
      <Layout>
        <Banner bannerClass="banner-career" showScrollSection>
          <div className="banner-content">
            <div className="center-middle-div">
              <h1 className="color-fg">Careers</h1>
              <h2 className="color-fg">Tagline</h2>
            </div>
          </div>
        </Banner>

        <div id="main-career" className="main-div">
          <section id="one">
            <div className="content-div">
              <h1 className="title"><span className="color-fg under-line">Make</span> a difference with us</h1>
              <OverflowWrapper>
                <p className="content color-fg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel malesuada erat, sit amet imperdiet ex. Mauris porta vulputate fringilla.Donec accumsan tempus ligula, consectetur euismod tellus vestibulum ac. Vestibulum massa sem, efficitur eget sem id, placerat pharetra tortor. Duis pulvinar in sapien in sodales. Fusce posuere erat in nisl pulvinar, sed ornare ligula mattis. Aliquam erat volutpat. Aliquam in urna sit amet lorem congue congue. Pellentesque habitantmorbi tristique senectus et netus et malesuada fames</p>
              </OverflowWrapper>
            </div>
          </section>
          <section id="two">
            <div className="content-div">
              <h1 className="title"><span className="under-line">Is</span> <span className="color-fg">Datavis</span> right for you?</h1>
              <OverflowWrapper>
                <p className="content color-fg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel malesuada erat, sit amet imperdiet ex. Mauris porta vulputate fringilla.Donec accumsan tempus ligula, consectetur euismod tellus vestibulum ac. Vestibulum massa sem, efficitur eget sem id, placerat pharetra tortor. Duis pulvinar in sapien in sodales. Fusce posuere erat in nisl pulvinar, sed ornare ligula mattis. Aliquam erat volutpat. Aliquam in urna sit amet lorem congue congue. Pellentesque habitantmorbi tristique senectus et netus et malesuada fames</p>
              </OverflowWrapper>
              <Link to="/career" className="button bg-fg no-transform small-height round-more bold">Click here to find out more now!</Link>
            </div>
          </section>

        </div>
      </Layout>
    );
  }
}
