import React from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';

export default class Solution extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    const headerOptions = {
      main_title: 'SOLUTION',
      linkTo: '/solution',
    };
    return (
      <Layout>
        <Banner bannerClass="banner-solution" headerOptions={ headerOptions }>
          <div className="banner-content">
            <div className="row">

              <div className="col-sm-6 industry" onClick={ () => navigate( '/industry' ) } role="link" tabIndex="0" onKeyUp={ this.handleKeyUp }>
                <div className="center-middle-div">
                  <h1>INDUSTRY</h1>
                </div>
              </div>

              <div className="col-sm-6 analytics" onClick={ () => navigate( '/analytics' ) } role="link" tabIndex="0" onKeyUp={ this.handleKeyUp }>
                <div className="center-middle-div">
                  <h1>ANALYTICS NEED</h1>
                </div>
              </div>
            </div>
          </div>
        </Banner>
      </Layout>
    );
  }
}
