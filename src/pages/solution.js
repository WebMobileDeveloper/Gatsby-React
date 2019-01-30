import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';

import industryImg from '../assets/images/banners/solution-industry.jpg';
import analyticsImg from '../assets/images/banners/solution-analytics.jpg';

export default class Solution extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    const headerOptions = {
      title: 'SOLUTION',
      linkTo: '/solution',
    };
    return (
      <Layout>
        <Banner bannerClass="banner-solution" showContactUs headerOptions={ headerOptions }>
          <div className="banner-content">
            <div className="row">

              <div className="col-md-6 industry">
                <img src={ industryImg } alt="" />
                <div className="center-middle-div">
                  <Link to="/industry"><h1>INDUSTRY</h1></Link>
                </div>
              </div>

              <div className="col-md-6 analytics">
                <img src={ analyticsImg } alt="" />
                <div className="center-middle-div">
                  <Link to="/analytics"><h1>ANALYTICS NEED</h1></Link>
                </div>
              </div>
            </div>
          </div>
        </Banner>
      </Layout>
    );
  }
}
