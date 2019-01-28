import React from 'react';

export default class PriceItem extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {};
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    const { ItemData } = this.props;
    // ItemData=[{ index,title, price, detail, type, projectCount, host,}]
    return (
      <div className={ `priceItem item-${ ItemData.index }` }>
        <h3 className="title">{ItemData.title}</h3>
        <div className="circle">
          <h3 className="center-middle-div">{ItemData.price}</h3>
        </div>
        <p className="detail">{ItemData.detail}</p>
        <p className="type">{ItemData.type}</p>
        <p className="projects">{ItemData.projectCount}</p>
        <p className="host">{ItemData.host}</p>
        <a href="#" className="more"><b>Click Here for more...</b></a>
      </div>
    );
  }
}
