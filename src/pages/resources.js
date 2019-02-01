import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import OverflowWrapper from '../components/OverflowWrapper';
import img1 from '../assets/images/resources/resource-1.jpg';
import img2 from '../assets/images/resources/resource-2.jpg';
import img3 from '../assets/images/resources/resource-3.jpg';
import img4 from '../assets/images/resources/resource-4.jpg';
import img5 from '../assets/images/resources/resource-5.jpg';
import img6 from '../assets/images/resources/resource-6.jpg';

export default class Resources extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  render () {
    const subTitleData = [ {
      index: 1,
      title: 'Titles',
      imgObj: img1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel malesuada erat, sit amet imperdiet ex. Mauris porta vulputate fringilla.Donec accumsan tempus ligula, consectetur euismod tellus vestibulum ac. Vestibulum massa sem, efficitur eget sem id, placerat pharetra tortor. Duis pulvinar in sapien in sodales. Fusce posuere erat in nisl pulvinar, sed ornare ligula mattis. Aliquam erat volutpat. Aliquam in urna sit amet lorem congue congue. Pellentesque habitantmorbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eget elit a mauris pharetra venenatis',
    }, {
      index: 2,
      title: 'Titles',
      imgObj: img2,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel malesuada erat, sit amet imperdiet ex. Mauris porta vulputate fringilla.Donec accumsan tempus ligula, consectetur euismod tellus vestibulum ac. Vestibulum massa sem, efficitur eget sem id, placerat pharetra tortor. Duis pulvinar in sapien in sodales. Fusce posuere erat in nisl pulvinar, sed ornare ligula mattis. Aliquam erat volutpat. Aliquam in urna sit amet lorem congue congue. Pellentesque habitantmorbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eget elit a mauris pharetra venenatis',
    }, {
      index: 3,
      title: 'Titles',
      imgObj: img3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel malesuada erat, sit amet imperdiet ex. Mauris porta vulputate fringilla.Donec accumsan tempus ligula, consectetur euismod tellus vestibulum ac. Vestibulum massa sem, efficitur eget sem id, placerat pharetra tortor. Duis pulvinar in sapien in sodales. Fusce posuere erat in nisl pulvinar, sed ornare ligula mattis. Aliquam erat volutpat. Aliquam in urna sit amet lorem congue congue. Pellentesque habitantmorbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eget elit a mauris pharetra venenatis',
    }, {
      index: 4,
      title: 'Titles',
      imgObj: img4,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel malesuada erat, sit amet imperdiet ex. Mauris porta vulputate fringilla.Donec accumsan tempus ligula, consectetur euismod tellus vestibulum ac. Vestibulum massa sem, efficitur eget sem id, placerat pharetra tortor. Duis pulvinar in sapien in sodales. Fusce posuere erat in nisl pulvinar, sed ornare ligula mattis. Aliquam erat volutpat. Aliquam in urna sit amet lorem congue congue. Pellentesque habitantmorbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eget elit a mauris pharetra venenatis',
    }, {
      index: 5,
      title: 'Titles',
      imgObj: img5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel malesuada erat, sit amet imperdiet ex. Mauris porta vulputate fringilla.Donec accumsan tempus ligula, consectetur euismod tellus vestibulum ac. Vestibulum massa sem, efficitur eget sem id, placerat pharetra tortor. Duis pulvinar in sapien in sodales. Fusce posuere erat in nisl pulvinar, sed ornare ligula mattis. Aliquam erat volutpat. Aliquam in urna sit amet lorem congue congue. Pellentesque habitantmorbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eget elit a mauris pharetra venenatis',
    }, {
      index: 6,
      title: 'Titles',
      imgObj: img6,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel malesuada erat, sit amet imperdiet ex. Mauris porta vulputate fringilla.Donec accumsan tempus ligula, consectetur euismod tellus vestibulum ac. Vestibulum massa sem, efficitur eget sem id, placerat pharetra tortor. Duis pulvinar in sapien in sodales. Fusce posuere erat in nisl pulvinar, sed ornare ligula mattis. Aliquam erat volutpat. Aliquam in urna sit amet lorem congue congue. Pellentesque habitantmorbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eget elit a mauris pharetra venenatis',
    },
    ];
    const subItems = [];
    subTitleData.forEach( item => subItems.push(
      <div className="col-lg-4 col-md-6" key={ item.index }>
        <div className="sub-item color-fg">
          <div className="img-div">
            <img src={ item.imgObj } alt={ item.title } />
            <Link to="/download" className="download-tag">DOWNLOAD</Link>
          </div>
          <div className="content-div">
            <h1 className="sub-title">
              {item.title}
            </h1>
            <OverflowWrapper>
              <p className="content">{item.content}</p>
            </OverflowWrapper>
          </div>
        </div>
      </div>
    ) );
    return (
      <Layout>
        <Banner showScrollSection bannerClass="banner-resources">
          <div className="banner-content">
            <div className="center-middle-div">
              <h1>Resources</h1>
              <div className="line" />
              <p className="sub-title">All the technical resources that you need that we can provide for your use.</p>
            </div>
          </div>
        </Banner>

        <div id="main-resources" className="main-div">
          <section id="resources">
            <div className="container container-fluid">
              <div className="row color-fg">
                {subItems}
              </div>
            </div>
          </section>

        </div>
      </Layout>
    );
  }
}
