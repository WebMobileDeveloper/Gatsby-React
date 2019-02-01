import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import PriceItem from '../components/pricing/PriceItem';
import img1 from '../assets/images/pricing/1.png';
import img2 from '../assets/images/pricing/2.png';
import img3 from '../assets/images/pricing/3.png';
import img4 from '../assets/images/pricing/4.png';
import img5 from '../assets/images/pricing/5.png';
import img6 from '../assets/images/pricing/6.png';

export default class Pricing extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = { overlayIndex: 0 };
    this.onShowOverlay = this.onShowOverlay.bind( this );
    this.handleClickDocument = this.handleClickDocument.bind( this );
  }

  componentDidMount () {
    document.addEventListener( 'mousedown', this.handleClickDocument );
  }

  componentWillUnmount () {
    document.removeEventListener( 'mousedown', this.handleClickDocument );
  }

  onShowOverlay ( index ) {
    this.setState( { overlayIndex: index } );
  }

  handleClickDocument ( event ) {
    if ( this.state.overlayIndex > 0 ) {
      this.setState( { overlayIndex: 0 } );
    }
  }

  render () {
    const overlays = [ null, img1, img2, img3, img4, img5, img6 ];
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
    Data.forEach( item => items.push(
      <div className="col-xl-4 col-lg-6 col-md-6  col-sm-12" key={ item.index }><PriceItem ItemData={ item } onShowOverlay={ this.onShowOverlay } /></div>
    ) );

    return (
      <Layout hideFooter>
        <Banner bannerClass="banner-pricing">
          <div className="banner-content">
            <div className="container container-fluid">
              <div className="row">
                {items}
              </div>
            </div>
          </div>
          {( this.state.overlayIndex > 0 ) && (
            <img src={ overlays[ this.state.overlayIndex ] } alt="" className="overlay-img noselect" />
          )}
        </Banner>
      </Layout>
    );
  }
}
