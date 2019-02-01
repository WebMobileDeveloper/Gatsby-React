import React from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';

export default class Industry extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    const headerOptions = {
      main_title: 'BY INDUSTRY',
      linkTo: '/solution',
      backButtonShow: true,
    };

    const linkData = [
      {
        link: 'retail',
        main_title: 'RETAIL',
        pathname: '/details',
        state: {
          details: {
            backLink: 'industry',
            title: 'Retail',
            target: 'retail',
          },
        },
      },
      {
        link: 'facilities',
        main_title: 'FACILITIES MANAGEMENT',
        pathname: '/details',
        state: {
          details: {
            backLink: 'industry',
            title: 'Facilities Management',
            target: 'facilities',
          },
        },
      },
      {
        link: 'financial',
        main_title: 'FINANCIAL SERVICES',
        pathname: '/details',
        state: {
          details: {
            backLink: 'industry',
            title: 'Financial Services',
            target: 'financial',
          },
        },
      },
      {
        link: 'logistic',
        main_title: 'TRANSPORTATION',
        second_title: 'LOGISTIC',
        pathname: '/details',
        state: {
          details: {
            backLink: 'industry',
            title: 'Transportation + logistic',
            target: 'logistic',
          },
        },
      },
    ];

    const items = [];
    linkData.forEach( item => items.push(
      <div className={ `col-md-6 ${ item.link }` } key={ item.link } onClick={ () => navigate( item.pathname, { state: item.state } ) } role="link" tabIndex="0" onKeyUp={ this.handleKeyUp }>
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
        <Banner bannerClass="banner-industry" headerOptions={ headerOptions }>
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
