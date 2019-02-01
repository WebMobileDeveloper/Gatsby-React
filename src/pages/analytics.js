import React from 'react';
import { navigate } from 'gatsby';
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
      <div className={ `col-xl-4 col-sm-6 ${ item.link }` } onClick={ () => navigate( item.pathname, { state: item.state } ) } role="link" tabIndex="0" onKeyUp={ this.handleKeyUp }>
        <div className="center-middle-div">
          <h1>
            {item.main_title}
            {item.second_title && (
              <span className="plus">+</span>
            )}
            {item.second_title}
          </h1>
        </div>
      </div>
    ) );
    return (
      <Layout>
        <Banner bannerClass="banner-analytics" headerOptions={ headerOptions }>
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
