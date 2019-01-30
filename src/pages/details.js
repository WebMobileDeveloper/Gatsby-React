import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import OverflowWrapper from '../components/OverflowWrapper';

export default class Details extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    const { backLink, title, target } = this.props.location.state.details;
    const headerOptions = {
      main_title: '',
      linkTo: `/${ backLink }`,
      backButtonShow: true,
    };

    /* eslint-disable global-require */
    console.log( `../assets/images/banners/details/${ backLink }/${ target }.jpg` );
    const imageObj = require( `../assets/images/banners/details/${ backLink }/${ target }.jpg` );
    /* eslint-enable global-require */

    const subTitleData = [ {
      index: 0,
      title: 'Titles',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel malesuada erat, sit amet imperdiet ex. Mauris porta vulputate fringilla.Donec accumsan tempus ligula, consectetur euismod tellus vestibulum ac. Vestibulum massa sem, efficitur eget sem id, placerat pharetra tortor. Duis pulvinar in sapien in sodales. Fusce posuere erat in nisl pulvinar, sed ornare ligula mattis. Aliquam erat volutpat. Aliquam in urna sit amet lorem congue congue. Pellentesque habitantmorbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eget elit a mauris pharetra venenatis',
    }, {
      index: 1,
      title: 'Titles',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel malesuada erat, sit amet imperdiet ex. Mauris porta vulputate fringilla.Donec accumsan tempus ligula, consectetur euismod tellus vestibulum ac. Vestibulum massa sem, efficitur eget sem id, placerat pharetra tortor. Duis pulvinar in sapien in sodales. Fusce posuere erat in nisl pulvinar, sed ornare ligula mattis. Aliquam erat volutpat. Aliquam in urna sit amet lorem congue congue. Pellentesque habitantmorbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eget elit a mauris pharetra venenatis',
    }, {
      index: 2,
      title: 'Titles',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel malesuada erat, sit amet imperdiet ex. Mauris porta vulputate fringilla.Donec accumsan tempus ligula, consectetur euismod tellus vestibulum ac. Vestibulum massa sem, efficitur eget sem id, placerat pharetra tortor. Duis pulvinar in sapien in sodales. Fusce posuere erat in nisl pulvinar, sed ornare ligula mattis. Aliquam erat volutpat. Aliquam in urna sit amet lorem congue congue. Pellentesque habitantmorbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eget elit a mauris pharetra venenatis',
    } ];
    const subTitleItems = [];
    subTitleData.forEach( item => subTitleItems.push(
      <div className="sub-item color-fg" key={ item.index }>
        <h1 className="sub-title">
          {item.title}
        </h1>
        <OverflowWrapper>
          <p className="content">{item.content}</p>
        </OverflowWrapper>
      </div>
    ) );
    return (
      <Layout>
        <Banner bannerClass={ `banner-details ${ backLink } ${ target }` } showContactUs showScrollSection headerOptions={ headerOptions }>
          <div className="banner-content">
            <div className="container container-fluid">
              <div className="row">
                <div className="col-sm-1" />
                <div className="col-sm-5">
                  <div className="title-tag hideOnScreen">{title}</div>
                  <img src={ imageObj } alt={ title } />
                </div>
                <div className="col-sm-6">
                  <div className="title-tag hideOnMobile">{title}</div>
                  {subTitleItems}
                </div>
              </div>
            </div>
          </div>
        </Banner>
      </Layout>
    );
  }
}
