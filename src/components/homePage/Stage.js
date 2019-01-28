import React from 'react';
import { Link } from 'gatsby';
import stageLineImg from '../../assets/images/stageline.png';

export default class Stage extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    const {
      title, linkTo, stageImg, content,
    } = this.props;
    return (
      <div className="frame">
        <img className="stage-line hideOnMobile" src={ stageLineImg } alt="" />
        <div className="header">
          <Link onClick={ this.props.onToggleMenu } to={ linkTo } className="stage-link">
            <img className="stageImg" src={ stageImg } alt="" />
          </Link>
          <div className="stageTitle">{title}</div>
        </div>
        <div className="content">
          <div className="font-merriweather-Light stage-content">{content}</div>
          <a href="#" className="button bg-fg no-transform small-height round-more bold">Click for more now!</a>
        </div>
      </div>
    );
  }
}
