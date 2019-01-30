import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';

export default class Analytics extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    const headerOptions = {
      main_title: 'BY ANALYTICAL NEEDS',
      linkTo: '/solution',
      backButtonShow: true,
    };
    const linkData = [
      {
        link: 'location',
        main_title: 'LOCATION INTELLIGENCE',
        pathname: '/details',
        state: {
          details: {
            backLink: 'analytics',
            title: 'Location Intelligence',
            target: 'location',
          },
        },
      },
      {
        link: 'bi',
        main_title: 'BI',
        second_title: 'VISUALIZATIONS',
        pathname: '/details',
        state: {
          details: {
            backLink: 'analytics',
            title: 'BI + Visualizations',
            target: 'bi',
          },
        },
      },
      {
        link: 'discovery',
        main_title: 'DATA DISCOVERY',
        second_title: 'MANAGEMENT',
        pathname: '/details',
        state: {
          details: {
            backLink: 'analytics',
            title: 'Data Discovery + Management',
            target: 'discovery',
          },
        },
      },
      {
        link: 'prep',
        main_title: 'DATA PREPARATIONS',
        pathname: '/details',
        state: {
          details: {
            backLink: 'analytics',
            title: 'Data Preparations',
            target: 'prep',
          },
        },
      },
      {
        link: 'advance',
        main_title: 'ADVANCED ANALYTICS',
        pathname: '/details',
        state: {
          details: {
            backLink: 'analytics',
            title: 'Advanced Analytics',
            target: 'advance',
          },
        },
      },
      {
        link: 'integration',
        main_title: 'TECHNOLOGY INTEGRATIONS',
        pathname: '/details',
        state: {
          details: {
            backLink: 'analytics',
            title: 'Technology Integrations',
            target: 'integration',
          },
        },
      },
    ];
    const items = [];
    linkData.forEach( item => items.push(
      <div className={ `col-xl-4 col-lg-6 ${ item.link }` }>
        <div className="center-middle-div">
          <Link to={ item.pathname } state={ item.state }>
            <h1>
              {item.main_title}
              {item.second_title && (
                <span className="plus">+</span>
              )}
              {item.second_title}
            </h1>
          </Link>
        </div>
      </div>
    ) );
    return (
      <Layout>
        <Banner bannerClass="banner-analytics" showContactUs showScrollSection headerOptions={ headerOptions }>
          <div className="banner-content">
            <div className="row">
              {items}
            </div>
          </div>
        </Banner>

      </Layout>
    );
  }
}
