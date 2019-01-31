import React from 'react';
import Layout from '../components/layout';
import Banner from '../components/Banner';

export default class Sandbox extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    return (
      <Layout hideFooter>
        <Banner bannerClass="banner-sandbox">
          <div className="banner-content">
            <div className="center-middle-div">
              <h1>Blank space</h1>
            </div>
          </div>
        </Banner>
      </Layout>
    );
  }
}
