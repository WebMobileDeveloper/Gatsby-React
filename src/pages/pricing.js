import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import PriceItem from '../components/pricing/PriceItem';

export default class Pricing extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    const Data = [ {
      index: 1,
      title: 'Open Source',
      price: 'Free',
      detail: 'For individual learning and experimenting',
      type: 'Private Deployment',
      projectCount: 'Unlimited Projects',
      host: 'Self Hosted',
      color: 'orange',
    },
    {
      index: 2,
      title: 'Individual',
      price: 'Free',
      detail: 'For individual learning and experimenting',
      type: 'Public Cloud',
      projectCount: 'One project',
      host: 'Datavis host in Google Cloud',
    },
    {
      index: 3,
      title: 'Professional',
      price: 'USD 30',
      detail: 'For Professional Projects and Hosting',
      type: 'Public Cloud',
      projectCount: '10 project',
      host: 'Datavis host in Google Cloud',
    },
    {
      index: 4,
      title: 'Enterprise Cloud',
      price: 'Contact Sales',
      detail: 'For Enterprise Teams and Business Critical Applications',
      type: 'Virtual Public Cloud',
      projectCount: 'Unlimited Projects',
      host: 'Virtual Private Cloud managed by Datavis on Google Cloud Platform',
    },
    {
      index: 5,
      title: 'Enterprise Platform',
      price: 'Contact Sales',
      detail: 'For Enterprise Teams and Business Critical Applications',
      type: 'Any Infrastructure',
      projectCount: 'Unlimited Projects',
      host: 'Any on-premise, public or private cloud infrastructure on which Datavis Enterprise is supported',
    },
    {
      index: 6,
      title: 'Commercial',
      price: 'Contact Sales',
      detail: 'For Building Commercial Products',
      type: 'Any Infrastructure',
      projectCount: 'Unlimited Projects',
      host: 'Any on-premise, public or private cloud infrastructure on which Datavis Enterprise is supported',
    },
    ];
    const items = [];
    Data
      .forEach( item => items.push(
        <div className="col-xl-4 col-lg-6 col-md-6  col-sm-12"><PriceItem ItemData={ item } key={ item.index } /></div>
      ) );

    return (
      <Layout hideFooter>
        <Banner bannerClass="banner-4" showContactUs>
          <div className="banner-content content-4">
            <div className="container container-fluid">
              <div className="row">
                {items}
              </div>
            </div>
          </div>
        </Banner>
      </Layout>
    );
  }
}
